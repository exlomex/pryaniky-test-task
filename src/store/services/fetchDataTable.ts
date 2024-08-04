import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '../../api/Api.ts';
import { DataSliceSchema } from '../reducers/DataSliceSchema.ts';
import { DataActions } from '../reducers/DataSlice.ts';

export interface returnedFetchData {
    data: DataSliceSchema[]
}

export const fetchDataTable = createAsyncThunk<returnedFetchData>(
    '/loginByUsername',
    async (_, thunkAPI) => {
        try {
            const response = await $api.get('/ru/data/v3/testmethods/docs/userdocs/get');

            if (!response.data.data) {
                throw new Error();
            }

            thunkAPI.dispatch(DataActions.setData(response.data.data as DataSliceSchema[]));
            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
