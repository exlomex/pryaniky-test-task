import {
    Dialog, DialogActions, DialogContent, DialogTitle,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { ChangeEvent, useCallback } from 'react';
import { getModalDataSelectedRow, getModalDataTables } from '../../store/selectors/getModalDataValues.ts';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { ModalDataActions } from '../../store/reducers/ModalDataSlice.ts';
import { addRowToTable } from '../../store/services/addRowToTable.ts';
import { DataTable } from '../../store/reducers/DataSliceSchema.ts';
import { editRow } from '../../store/services/editRow.ts';

export const enum modalTypes {
    ADD_MODAL = 'add',
    EDIT_MODAL = 'edit',
}
interface ModalProps {
    modalType: modalTypes;
    isOpen: boolean;
    onClose: () => void
}

export const DataModal = (props: ModalProps) => {
    const { modalType, isOpen, onClose } = props;

    const modalData = useSelector(getModalDataTables);
    const selectedId = useSelector(getModalDataSelectedRow);

    const dispatch = useAppDispatch();

    const handleSubmitEditButton = useCallback(() => {
        if (modalData && selectedId) {
            dispatch(editRow({ data: modalData as DataTable, id: selectedId }));
        }
        dispatch(ModalDataActions.clearData());
        onClose();
    }, [dispatch, modalData, onClose, selectedId]);

    const handleCloseModal = useCallback(() => {
        dispatch(ModalDataActions.clearData());
        onClose();
    }, [dispatch, onClose]);

    const handleSubmitAddButton = useCallback(() => {
        if (modalData) {
            dispatch(addRowToTable(modalData as DataTable));
        }
        dispatch(ModalDataActions.clearData());
    }, [dispatch, modalData]);

    return (
        <Dialog open={isOpen} onClose={handleCloseModal} fullWidth maxWidth="sm">
            <DialogTitle>{`${modalType === modalTypes.EDIT_MODAL ? 'Редактировать' : 'Добавить'} запись`}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    name='documentStatus'
                    label="DocumentStatus"
                    type="text"
                    fullWidth
                    value={modalData && modalData.documentStatus}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        dispatch(ModalDataActions.setModalDataDocumentStatus(e.target.value));
                    }}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    name='employeeNumber'
                    label="EmployeeNumber"
                    type="text"
                    fullWidth
                    value={modalData && modalData.employeeNumber}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        dispatch(ModalDataActions.setModalDataEmployeeNumber(e.target.value));
                    }}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    name='documentType'
                    label="DocumentType"
                    type="text"
                    fullWidth
                    value={modalData && modalData.documentType}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        dispatch(ModalDataActions.setModalDataDocumentType(e.target.value));
                    }}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    name='documentName'
                    label="DocumentName"
                    type="text"
                    fullWidth
                    value={modalData && modalData.documentName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        dispatch(ModalDataActions.setModalDataDocumentName(e.target.value));
                    }}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    name='companySignatureName'
                    label="CompanySignatureName"
                    type="text"
                    fullWidth
                    value={modalData && modalData.companySignatureName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        dispatch(ModalDataActions.setModalDataCompanySignatureName(e.target.value));
                    }}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    name='employeeSignatureName'
                    label="EmployeeSignatureName"
                    type="text"
                    fullWidth
                    value={modalData && modalData.employeeSignatureName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        dispatch(ModalDataActions.setModalDataEmployeeSignatureName(e.target.value));
                    }}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    name='employeeSigDate'
                    label="EmployeeSigDate"
                    type="date"
                    fullWidth
                    value={modalData && modalData.employeeSigDate}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        dispatch(ModalDataActions.setModalDataEmployeeSigDate(e.target.value));
                    }}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    InputLabelProps={{ shrink: true }}
                    autoFocus
                    margin="dense"
                    name='companySigDate'
                    label="CompanySigDate"
                    type="date"
                    fullWidth
                    value={modalData && modalData.companySigDate}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        dispatch(ModalDataActions.setModalDataCompanySigDate(e.target.value));
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseModal} color="primary">
                    Cancel
                </Button>
                <Button onClick={modalType === modalTypes.EDIT_MODAL ? handleSubmitEditButton : handleSubmitAddButton} color="primary">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};
