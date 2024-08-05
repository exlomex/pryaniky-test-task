import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '../../api/Api.ts';
import { DataSliceSchema, DataTable } from '../reducers/DataSliceSchema.ts';
import { DataActions } from '../reducers/DataSlice.ts';
import { IsoToDate } from '../../lib/dateFunctions.ts';

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

            const data = (response.data.data as Array<DataTable>).map((row) => {
                row.companySigDate = IsoToDate(row.companySigDate);
                row.employeeSigDate = IsoToDate(row.companySigDate);
                return row;
            });

            thunkAPI.dispatch(DataActions.setData(data));
            return response.data.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
