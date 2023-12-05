import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData:{},
    isLogin:false
}

const authSlice=createSlice({
    name:'userData',
    initialState,
    reducers:{
        saveUserData:(state,action)=>{
            state.isLogin=action.payload
        },
    }

    
})

export const {saveUserData}=authSlice.actions;
export default authSlice.reducer