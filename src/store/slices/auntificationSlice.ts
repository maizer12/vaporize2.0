import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    registrationDB : [{'login': 'ivan', 'password': '12345'}],
    userLogin: '' 
};

const auntificationSlice = createSlice({
    name: 'auntification',
    initialState,
    reducers:{
        setUserLogin : (state, action)=>{
            state.userLogin = action.payload
        },
    }
});

export const { setUserLogin } = auntificationSlice.actions;
export default auntificationSlice.reducer;