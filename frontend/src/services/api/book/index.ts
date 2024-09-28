import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "@/constants";
import { IBookRequest } from "@/services/api-types/book.types";
import { IResponse, IUpdateRequest } from "@/services/api-types/response.types";
import { storeAllBooks } from "@/services/redux/reducers/book";



export const BookApi = createApi({
    reducerPath: "BookApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getAllBooks: builder.query<IResponse, undefined>({
            queryFn: async (args, { dispatch }, _extraOptions, baseQuery) => {
                let response = await baseQuery({
                    url: "/books/all",
                    method: "GET",

                })

                if (response.data) {
                    let { success, message, data, total_number_pages } = response.data as IResponse;

                    if (success == true) {
                        dispatch(storeAllBooks(data));
                        return { data: { success, message, data, total_number_pages } }
                    }
                    return { data: { success, message, data } }


                }

                return { data: { success: false, message: "Something went wrong", data: {} } }
            }
        }),
        addBook: builder.mutation<IResponse, IBookRequest>({
            queryFn: async (args, { dispatch }, _extraOptions, baseQuery) => {
                let response = await baseQuery({
                    url: "/books/add",
                    method: "POST",
                    body: args
                })

                if (response.data) {
                    let { success, message, data } = response.data as IResponse;

                    if (success == true) {
                        dispatch(BookApi.endpoints.getAllBooks.initiate(undefined))
                    }
                    return { data: { success, message, data } }

                }

                return { data: { success: false, message: "Something went wrong", data: {} } }
            }
        }),
        updateBook: builder.mutation<IResponse, IUpdateRequest>({
            queryFn: async (args, { dispatch }, _extraOptions, baseQuery) => {
                let response = await baseQuery({
                    url: `/books/update/${args.id}`,
                    method: "PATCH",
                    body: args.data
                })

                if (response.data) {
                    let { success, message, data } = response.data as IResponse;

                    if (success == true) {
                        dispatch(BookApi.endpoints.getAllBooks.initiate(undefined))
                    }
                    return { data: { success, message, data } }

                }

                return { data: { success: false, message: "Something went wrong", data: {} } }
            }
        }),
        deleteBook: builder.mutation<IResponse, string>({
            queryFn: async (args, { dispatch }, _extraOptions, baseQuery) => {
                let response = await baseQuery({
                    url: `/books/delete/${args}`,
                    method: "DELETE",
                    
                })

                if (response.data) {
                    let { success, message, data } = response.data as IResponse;

                    if (success == true) {
                        dispatch(BookApi.endpoints.getAllBooks.initiate(undefined))
                    }
                    return { data: { success, message, data } }

                }

                return { data: { success: false, message: "Something went wrong", data: {} } }
            }
        }),
        
    })
})


export const { useAddBookMutation, useDeleteBookMutation, useGetAllBooksQuery, useUpdateBookMutation } = BookApi;