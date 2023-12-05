import { saveUserData } from "../reducers/auth";
import types from "../types";
import store from '../store';

const {dispatch}=store;

export const login =(data)=>{
    dispatch(saveUserData(data));
}

export function logout(){
    dispatch({type:types.CLEAR_REDUX_STATE})
}
