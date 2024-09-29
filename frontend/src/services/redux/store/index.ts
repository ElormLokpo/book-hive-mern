import {configureStore} from "@reduxjs/toolkit";
import { persistedReducer } from "../reducers";
import { AuthApi } from "@/services/api/auth";
import { PingApi } from "@/services/api/ping";
import { BookApi } from "@/services/api/book";
import { BorrowRecordApi } from "@/services/api/borrow-record";
import { persistStore  } from "redux-persist";

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck: {
        
          ignoredActions: [
            'persist/PERSIST',
            'persist/REHYDRATE',
            'persist/FLUSH',
            'persist/PAUSE',
            'persist/PURGE',
            'persist/REGISTER'
          ],
        },
      }).concat(AuthApi.middleware, PingApi.middleware, BookApi.middleware, BorrowRecordApi.middleware)
})

export const persistedStore = persistStore(store)