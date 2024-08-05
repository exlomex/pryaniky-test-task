import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '../../api/Api.ts';
import { DataActions } from '../reducers/DataSlice.ts';

export const deleteRow = createAsyncThunk<undefined, string>(
    '/deleteRow',
    async (id, thunkAPI) => {
        try {
            const response = await $api.post(`/ru/data/v3/testmethods/docs/userdocs/delete/${id}`, id);

            if (response.data.error_code) {
                throw new Error();
            }
            thunkAPI.dispatch(DataActions.deleteRow(id));
            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
