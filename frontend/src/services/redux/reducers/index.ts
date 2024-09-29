import { AuthApi } from "@/services/api/auth"
import AuthReducer from "./auth"
import BookReducer from "./book"
import BorrowRecord from "./borrow-record"
import { combineReducers } from "@reduxjs/toolkit"
import { PingApi } from "@/services/api/ping"
import { BookApi } from "@/services/api/book"
import { BorrowRecordApi } from "@/services/api/borrow-record"
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',         
    storage,    
    whitelist: ['auth']         
  };

export const rootReducer = combineReducers({
    auth: AuthReducer,
    book: BookReducer,
    borrowRecord: BorrowRecord,
    [PingApi.reducerPath] : PingApi.reducer,
    [AuthApi.reducerPath] : AuthApi.reducer,
    [BookApi.reducerPath] : BookApi.reducer,
    [BorrowRecordApi.reducerPath] : BorrowRecordApi.reducer
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)