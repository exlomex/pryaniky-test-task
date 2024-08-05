import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { DataModal } from '../DataModal';
import { modalTypes } from '../DataModal/DataModal.tsx';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { getModalDataSelectedRow } from '../../store/selectors/getModalDataValues.ts';
import { getDataTables } from '../../store/selectors/getDataValues.tsx';
import { ModalDataActions } from '../../store/reducers/ModalDataSlice.ts';
import { deleteRow } from '../../store/services/deleteRow.ts';

interface CrudButtonsProps {
    isButtonsActive: boolean;
}

export const CrudButtons = (props: CrudButtonsProps) => {
    const { isButtonsActive } = props;

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const dispatch = useAppDispatch();

    const onCloseEditModal = useCallback(() => {
        setIsEditModalOpen(false);
    }, []);

    const onCloseAddModal = useCallback(() => {
        setIsAddModalOpen(false);
    }, []);

    const HandleAddData = useCallback(() => {
        setIsAddModalOpen(true);
    }, []);

    const selectedRowId = useSelector(getModalDataSelectedRow);
    const dataTable = useSelector(getDataTables);
    const HandleEditData = useCallback(() => {
        setIsEditModalOpen(true);
        if (dataTable && selectedRowId) {
            const modalData = dataTable.find((row) => row.id === selectedRowId);
            if (modalData) {
                dispatch(ModalDataActions.setModalData(modalData));
            }
        }
    }, [dataTable, dispatch, selectedRowId]);

    const HandleDeleteData = useCallback(() => {
        if (selectedRowId) {
            dispatch(deleteRow(selectedRowId));
        }
    }, [dispatch, selectedRowId]);

    const matches = useMediaQuery('(max-width:500px)');

    return (
        <>
            <Box sx={{
                width: '100%',
                padding: '0 20px',
                display: 'flex',
                justifyContent: 'center',
                gap: '15px 15px',
                marginTop: '20px',
                flexWrap: 'wrap',
            }}>
                <Button
                    fullWidth={matches}
                    onClick={HandleAddData}
                    type="submit"
                    variant="contained"
                    sx={{
                        color: '#fff',
                        bgcolor: '#FF636C',
                        boxShadow: 'none',
                        ':hover': { bgcolor: '#ffb4b9', boxShadow: 'none' },
                        fontWeight: '500',
                        fontSize: '1em',
                        borderRadius: '8px',
                        textTransform: 'lowercase',
                        height: 35,
                        minWidth: 135,

                    }}
                >
                    Добавить
                </Button>
                <Button
                    fullWidth={matches}
                    onClick={HandleEditData}
                    type="submit"
                    variant="contained"
                    sx={{
                        color: '#fff',
                        bgcolor: '#FF636C',
                        boxShadow: 'none',
                        ':hover': { bgcolor: '#ffb4b9', boxShadow: 'none' },
                        fontWeight: '500',
                        fontSize: '1em',
                        borderRadius: '8px',
                        textTransform: 'lowercase',
                        height: 35,
                        minWidth: '15vw',
                    }}
                    disabled={!isButtonsActive}
                >
                    Редактировать
                </Button>
                <Button
                    fullWidth={matches}
                    onClick={HandleDeleteData}
                    type="submit"
                    variant="contained"
                    sx={{
                        color: '#fff',
                        bgcolor: '#FF636C',
                        boxShadow: 'none',
                        ':hover': { bgcolor: '#ffb4b9', boxShadow: 'none' },
                        fontWeight: '500',
                        fontSize: '1em',
                        borderRadius: '8px',
                        textTransform: 'lowercase',
                        height: 35,
                        minWidth: 135,

                    }}
                    disabled={!isButtonsActive}
                >
                    Удалить
                </Button>
            </Box>

            <DataModal
                modalType={modalTypes.ADD_MODAL}
                isOpen={isAddModalOpen}
                onClose={onCloseAddModal}
            />

            <DataModal
                modalType={modalTypes.EDIT_MODAL}
                isOpen={isEditModalOpen}
                onClose={onCloseEditModal}
            />
        </>
    );
};
