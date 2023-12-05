import { createSlice } from "@reduxjs/toolkit";


const initialState={
    lang:'en',
    selectedTheme: 'dark',
}

const appSettingsSlice=createSlice({
    name:'appSetting',
    initialState,
    reducers:{

       changeLang:(state,action)=>{
        state.lang=action.payload;

       }, 

       changeTheme:(state,action)=>{
        state.selectedTheme = action.payload;

       }

    }
})

export const {changeLang,changeTheme}=appSettingsSlice.actions

export default appSettingsSlice.reducer