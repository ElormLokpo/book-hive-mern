import { IBorrowRecordReduxState } from "@/services/api-types/borrow.record.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:IBorrowRecordReduxState = {
    value:{
        all_records: []
    }
}

export const BorrowRecordSlice = createSlice({
    name:"BorrowRecordSlice",
    initialState,
    reducers:{
        storeAllBorrowRecords : (state, action:PayloadAction<any[]>)=>{
            state.value.all_records = action.payload
        }
    }
})


export const {storeAllBorrowRecords} = BorrowRecordSlice.actions;
export default BorrowRecordSlice.reducer;