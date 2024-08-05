import { createSelector } from '@reduxjs/toolkit';
import { LoginFormSliceSchema } from '../reducers/LoginFormSliceSchema.ts';
import { getData } from './getData.ts';
import { DataSliceSchema, DataTable } from '../reducers/DataSliceSchema.ts';

export const getDataTables = createSelector(
    getData,
    (data: DataSliceSchema) => data.table,
);
export const getDataLoading = createSelector(
    getData,
    (data: DataSliceSchema) => data.isLoading,
);
export const getDataError = createSelector(
    getData,
    (data: DataSliceSchema) => data.error,
);
