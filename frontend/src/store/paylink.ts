import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface PaylinkState {
    type: 'product' | 'service' | null;

}

const initialState: PaylinkState = {
    type: null,
};

const PaylinkSlice = createSlice({
    name: "paylink",
    initialState,
    reducers:{
        setTypePaylink: (state, action: PayloadAction<PaylinkState>) => {
            state.type = action.payload.type;
        },
    }
});

export const { setTypePaylink } = PaylinkSlice.actions;
export default PaylinkSlice.reducer;