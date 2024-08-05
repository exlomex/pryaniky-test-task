import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '../../api/Api.ts';
import { DataTable } from '../reducers/DataSliceSchema.ts';
import { DataActions } from '../reducers/DataSlice.ts';

interface editRowProps {
    id: string;
    data: DataTable;
}
export const editRow = createAsyncThunk<undefined, editRowProps>(
    '/editRow',
    async (Data, thunkAPI) => {
        try {
            const response = await $api.post(`/ru/data/v3/testmethods/docs/userdocs/set/${Data.id}`, Data.data);

            if (!response.data.data) {
                throw new Error();
            }
            thunkAPI.dispatch(DataActions.editData(response.data.data));
            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
