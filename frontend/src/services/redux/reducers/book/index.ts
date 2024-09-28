import { IBookReduxState } from "@/services/api-types/book.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:IBookReduxState = {
    value:{
        all_books: []
    }
}

export const BookSlice = createSlice({
    name:"BookSlice",
    initialState,
    reducers:{
        storeAllBooks : (state, action:PayloadAction<any[]>)=>{
            state.value.all_books = action.payload
        }
    }
})


export const {storeAllBooks} = BookSlice.actions;
export default BookSlice.reducer;