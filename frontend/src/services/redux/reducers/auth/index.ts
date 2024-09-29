import { IAuthReduxState } from "@/services/api-types/auth.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:IAuthReduxState = {
    value:{
        current_user: undefined
    }
}

export const AuthSlice = createSlice({
    name:"AuthSlice",
    initialState,
    reducers:{
        storeCurrentUser : (state, action:PayloadAction)=>{
            state.value.current_user = action.payload
        },
        logoutUser:(state, action)=>{
            state.value.current_user = undefined
        }
    }
})


export const {storeCurrentUser,logoutUser} = AuthSlice.actions;
export default AuthSlice.reducer;