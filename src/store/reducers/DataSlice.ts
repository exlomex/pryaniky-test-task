import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginFormSliceSchema } from './LoginFormSliceSchema.ts';
import { DataSliceSchema } from './DataSliceSchema.ts';
import { fetchDataTable } from '../services/fetchDataTable.ts';

const initialState: DataSliceSchema = {
    isLoading: false,
};
export const DataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<DataSliceSchema[]>) => {
            state.table = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataTable.pending, (state: LoginFormSliceSchema) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchDataTable.fulfilled, (state: LoginFormSliceSchema) => {
                state.isLoading = false;
            })
            .addCase(fetchDataTable.rejected, (state: LoginFormSliceSchema, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: DataActions } = DataSlice;
export const { reducer: DataReducer } = DataSlice;
