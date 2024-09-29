import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "@/constants";


export const PingApi = createApi({
    reducerPath: "PingApi",
    baseQuery: fetchBaseQuery({
        baseUrl,
    }),
    endpoints: (builder) => ({
        ping: builder.query({
            queryFn: async (args, _dispatch , _extraOptions, baseQuery) => {
                let response = await baseQuery({
                    url: "/ping",
                    method: "GET",
                   
                })

                console.log(args)
                if (response.data) {
                    console.log("Ping run")
                    console.log(response.data);
                    return { data: { success: true, message: "", data: response.data } }

                }

                return { data: { success: false, message: "Something went wrong", data: {} } }
            }
        })
    })
})

export const { usePingQuery } = PingApi