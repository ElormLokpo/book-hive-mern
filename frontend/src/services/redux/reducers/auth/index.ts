import { IAuthReduxState } from "@/services/api-types/auth.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:IAuthReduxState = {
    value:{
        current_user: {}
    }
}

export const AuthSlice = createSlice({
    name:"AuthSlice",
    initialState,
    reducers:{
        storeCurrentUser : (state, action:PayloadAction)=>{
            state.value.current_user = action.payload
        }
    }
})


export const {storeCurrentUser} = AuthSlice.actions;
export default AuthSlice.reducer;