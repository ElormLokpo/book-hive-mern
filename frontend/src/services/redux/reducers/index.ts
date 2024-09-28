import { AuthApi } from "@/services/api/auth"
import AuthReducer from "./auth"
import BookReducer from "./book"
import { combineReducers } from "@reduxjs/toolkit"
import { PingApi } from "@/services/api/ping"
import { BookApi } from "@/services/api/book"

export const rootReducer = combineReducers({
    auth: AuthReducer,
    book: BookReducer,
    [PingApi.reducerPath] : PingApi.reducer,
    [AuthApi.reducerPath] : AuthApi.reducer,
    [BookApi.reducerPath] : BookApi.reducer
})

