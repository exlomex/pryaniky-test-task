import { DataTable } from './DataSliceSchema.ts';

export interface ModalDataSliceSchema {
    isLoading: boolean;
    error?: string;
    selectedRow?: string;
    fieldsFilled?: boolean;

    modalData: Partial<DataTable>
}
