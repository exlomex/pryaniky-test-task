import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '../../api/Api.ts';
import { DataTable } from '../reducers/DataSliceSchema.ts';
import { DataActions } from '../reducers/DataSlice.ts';

export const addRowToTable = createAsyncThunk<undefined, DataTable>(
    '/loginByUsername',
    async (Data, thunkAPI) => {
        try {
            const response = await $api.post('/ru/data/v3/testmethods/docs/userdocs/create', Data);

            if (!response.data.data) {
                throw new Error();
            }
            thunkAPI.dispatch(DataActions.addData(response.data.data));
            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
