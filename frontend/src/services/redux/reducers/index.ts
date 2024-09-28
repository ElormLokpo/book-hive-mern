import { AuthApi } from "@/services/api/auth"
import AuthReducer from "./auth"
import BookReducer from "./book"
import BorrowRecord from "./borrow-record"
import { combineReducers } from "@reduxjs/toolkit"
import { PingApi } from "@/services/api/ping"
import { BookApi } from "@/services/api/book"
import { BorrowRecordApi } from "@/services/api/borrow-record"

export const rootReducer = combineReducers({
    auth: AuthReducer,
    book: BookReducer,
    borrowRecord: BorrowRecord,
    [PingApi.reducerPath] : PingApi.reducer,
    [AuthApi.reducerPath] : AuthApi.reducer,
    [BookApi.reducerPath] : BookApi.reducer,
    [BorrowRecordApi.reducerPath] : BorrowRecordApi.reducer
})

