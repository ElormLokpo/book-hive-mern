import {configureStore} from "@reduxjs/toolkit";
import { rootReducer } from "../reducers";
import { AuthApi } from "@/services/api/auth";
import { PingApi } from "@/services/api/ping";
import { BookApi } from "@/services/api/book";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(AuthApi.middleware, PingApi.middleware, BookApi.middleware)
})