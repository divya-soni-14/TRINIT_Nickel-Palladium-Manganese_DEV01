import { createSlice } from "@reduxjs/toolkit"

const initialAuthState = {
    isAuthenticated: false,
    account: null,
    type: null,
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state,action){
            state.isAuthenticated = true;
            state.account = action.payload.account;
            state.type = action.payload.type;
        },
        logout(state){
            state.isAuthenticated = false;
            state.account = null;
            state.type = null;
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;