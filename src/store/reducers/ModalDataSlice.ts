import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalDataSliceSchema } from './ModalDataSliceSchema.ts';
import { DataTable } from './DataSliceSchema.ts';

const initialState: ModalDataSliceSchema = {
    isLoading: false,

    modalData: {
        documentStatus: '',
        employeeNumber: '',
        documentType: '',
        documentName: '',
        companySignatureName: '',
        employeeSignatureName: '',
        employeeSigDate: '',
        companySigDate: '',
    },
};
export const ModalDataSlice = createSlice({
    name: 'modalData',
    initialState,
    reducers: {
        clearData: (state: ModalDataSliceSchema) => {
            state.modalData = initialState.modalData;
        },
        setSelectedRow: (state: ModalDataSliceSchema, action: PayloadAction<string>) => {
            state.selectedRow = action.payload;
        },
        setModalData: (state: ModalDataSliceSchema, action: PayloadAction<DataTable>) => {
            state.modalData = action.payload;
        },
        setModalDataDocumentStatus: (state: ModalDataSliceSchema, action: PayloadAction<string>) => {
            if ('documentStatus' in state.modalData) {
                state.modalData.documentStatus = action.payload;
            }
        },
        setModalDataEmployeeNumber: (state: ModalDataSliceSchema, action: PayloadAction<string>) => {
            if ('employeeNumber' in state.modalData) {
                state.modalData.employeeNumber = action.payload;
            }
        },
        setModalDataDocumentType: (state: ModalDataSliceSchema, action: PayloadAction<string>) => {
            if ('documentType' in state.modalData) {
                state.modalData.documentType = action.payload;
            }
        },
        setModalDataDocumentName: (state: ModalDataSliceSchema, action: PayloadAction<string>) => {
            if ('documentName' in state.modalData) {
                state.modalData.documentName = action.payload;
            }
        },
        setModalDataCompanySignatureName: (state: ModalDataSliceSchema, action: PayloadAction<string>) => {
            if ('companySignatureName' in state.modalData) {
                state.modalData.companySignatureName = action.payload;
            }
        },
        setModalDataEmployeeSignatureName: (state: ModalDataSliceSchema, action: PayloadAction<string>) => {
            if ('employeeSignatureName' in state.modalData) {
                state.modalData.employeeSignatureName = action.payload;
            }
        },
        setModalDataEmployeeSigDate: (state: ModalDataSliceSchema, action: PayloadAction<string>) => {
            if ('employeeSigDate' in state.modalData) {
                state.modalData.employeeSigDate = action.payload;
            }
        },
        setModalDataCompanySigDate: (state: ModalDataSliceSchema, action: PayloadAction<string>) => {
            if ('companySigDate' in state.modalData) {
                state.modalData.companySigDate = action.payload;
            }
        },

    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchDataTable.pending, (state: LoginFormSliceSchema) => {
    //             state.isLoading = true;
    //             state.error = undefined;
    //         })
    //         .addCase(fetchDataTable.fulfilled, (state: LoginFormSliceSchema) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(fetchDataTable.rejected, (state: LoginFormSliceSchema, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: ModalDataActions } = ModalDataSlice;
export const { reducer: ModalDataReducer } = ModalDataSlice;
