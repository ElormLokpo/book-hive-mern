import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "@/constants";
import { IBorrowRecordRequest } from "@/services/api-types/borrow.record.types";
import { IResponse, IUpdateRequest } from "@/services/api-types/response.types";
import { storeAllBorrowRecords } from "@/services/redux/reducers/borrow-record";


export const BorrowRecordApi = createApi({
    reducerPath: "BorrowRecordApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getAllBorrowRecords: builder.query<IResponse, undefined>({
            queryFn: async (args, { dispatch }, _extraOptions, baseQuery) => {
                let response = await baseQuery({
                    url: "/borrow-records/all",
                    method: "GET",

                })

                if (response.data) {
                    let { success, message, data, total_number_pages } = response.data as IResponse;

                    if (success == true) {
                        dispatch(storeAllBorrowRecords(data));
                        return { data: { success, message, data, total_number_pages } }
                    }
                    return { data: { success, message, data } }


                }

                return { data: { success: false, message: "Something went wrong", data: {} } }
            }
        }),
        addBorrowRecord: builder.mutation<IResponse, IBorrowRecordRequest>({
            queryFn: async (args, { dispatch }, _extraOptions, baseQuery) => {
                let response = await baseQuery({
                    url: "/borrow-records/add",
                    method: "POST",
                    body: args
                })

                if (response.data) {
                    let { success, message, data } = response.data as IResponse;

                    if (success == true) {
                        dispatch(BorrowRecordApi.endpoints.getAllBorrowRecords.initiate(undefined))
                    }
                    return { data: { success, message, data } }

                }

                return { data: { success: false, message: "Something went wrong", data: {} } }
            }
        }),
        updateBorrowRecord: builder.mutation<IResponse, IUpdateRequest>({
            queryFn: async (args, { dispatch }, _extraOptions, baseQuery) => {
                let response = await baseQuery({
                    url: `/borrow-records/update/${args.id}`,
                    method: "PATCH",
                    body: args.data
                })

                if (response.data) {
                    let { success, message, data } = response.data as IResponse;

                    if (success == true) {
                        dispatch(BorrowRecordApi.endpoints.getAllBorrowRecords.initiate(undefined))
                    }
                    return { data: { success, message, data } }

                }

                return { data: { success: false, message: "Something went wrong", data: {} } }
            }
        }),
        deleteBorrowRecord: builder.mutation<IResponse, string>({
            queryFn: async (args, { dispatch }, _extraOptions, baseQuery) => {
                let response = await baseQuery({
                    url: `/borrow-records/delete/${args}`,
                    method: "DELETE",
                    
                })

                if (response.data) {
                    let { success, message, data } = response.data as IResponse;

                    if (success == true) {
                        dispatch(BorrowRecordApi.endpoints.getAllBorrowRecords.initiate(undefined))
                    }
                    return { data: { success, message, data } }

                }

                return { data: { success: false, message: "Something went wrong", data: {} } }
            }
        }),
        
    })
})


export const { useAddBorrowRecordMutation, useDeleteBorrowRecordMutation, useGetAllBorrowRecordsQuery, useUpdateBorrowRecordMutation } = BorrowRecordApi;