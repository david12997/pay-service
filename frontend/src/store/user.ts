import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    id?: number | string | null;
    name?: string | null;
    email?: string | null;
    phone?: string | null;
    token?: string | null;
    mp_access_token?: string | null;
    loading?: boolean;
}

const initialState: UserState = {
    name: null,
    email: null,
    phone: null,
    token: null,
    loading: false,
};

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        setUser: (state, action: PayloadAction<UserState>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.token = action.payload.token;
            state.mp_access_token = action.payload.mp_access_token;
        },
        removeUser: (state) => {
            state.name = null;
            state.email = null;
            state.phone = null;
            state.token = null;
            state.mp_access_token = null;
        },
        LoginWithGoogle: (state, action: PayloadAction<UserState>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.token = action.payload.token;
            state.loading = action.payload.loading;
            
        },

        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setMPAccessToken: (state, action: PayloadAction<string>) => {
            state.mp_access_token = action.payload;
        },
    
    }
    
});

export const { setUser, removeUser, LoginWithGoogle, setToken, setLoading, setMPAccessToken } = UserSlice.actions;
export default UserSlice.reducer;