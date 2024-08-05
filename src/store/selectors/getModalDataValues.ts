import { createSelector } from '@reduxjs/toolkit';
import { getModalData } from './getModalData.ts';
import { ModalDataSliceSchema } from '../reducers/ModalDataSliceSchema.ts';

export const getModalDataTables = createSelector(
    getModalData,
    (data: ModalDataSliceSchema) => data.modalData,
);

export const getModalDataSelectedRow = createSelector(
    getModalData,
    (data: ModalDataSliceSchema) => data.selectedRow,
);
export const getModalDataLoading = createSelector(
    getModalData,
    (data: ModalDataSliceSchema) => data.isLoading,
);
export const getModalDataError = createSelector(
    getModalData,
    (data: ModalDataSliceSchema) => data.error,
);
