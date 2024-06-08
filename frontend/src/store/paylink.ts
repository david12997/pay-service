import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface PaylinkState {
    type?: 'product' | 'service' | null;
    btnNextVisible?: boolean;



}

const initialState: PaylinkState = {
    type: null,
    btnNextVisible: false,
};

const PaylinkSlice = createSlice({
    name: "paylink",
    initialState,
    reducers:{

        setTypePaylink: (state, action: PayloadAction<PaylinkState>) => {
            state.type = action.payload.type;
        },

        setBtnNextVisible: (state, action: PayloadAction<PaylinkState>) => {
            state.btnNextVisible = action.payload.btnNextVisible;

        },

    }
});

export const { setTypePaylink, setBtnNextVisible } = PaylinkSlice.actions;
export default PaylinkSlice.reducer;