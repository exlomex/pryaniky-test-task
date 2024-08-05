import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GridRowParams } from '@mui/x-data-grid/models/params/gridRowParams';
import { DataTable } from '../../store/reducers/DataSliceSchema.ts';
import { getDataTables } from '../../store/selectors/getDataValues.tsx';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { ModalDataActions } from '../../store/reducers/ModalDataSlice.ts';

interface TableProps {
    setIsAdditionalButtonsActive: () => void
}

export const Table = (props: TableProps) => {
    const { setIsAdditionalButtonsActive } = props;

    const rows = useSelector(getDataTables);

    const dispatch = useAppDispatch();

    const handleRowClick = useCallback((params: GridRowParams) => {
        setIsAdditionalButtonsActive();
        dispatch(ModalDataActions.setSelectedRow(params.row.id));
    }, [dispatch, setIsAdditionalButtonsActive]);

    const columns: GridColDef<DataTable[number]>[] = [
        { field: 'id', headerName: 'Id', width: 90 },
        {
            field: 'companySigDate',
            headerName: 'CompanySigDate',
            width: 150,
            editable: true,
        },
        {
            field: 'companySignatureName',
            headerName: 'CompanySignatureName',
            width: 200,
            editable: true,
        },
        {
            field: 'documentName',
            headerName: 'DocumentName',
            width: 140,
            editable: true,
        },
        {
            field: 'documentStatus',
            headerName: 'DocumentStatus',
            width: 140,
        },
        {
            field: 'documentType',
            headerName: 'DocumentType',
            width: 140,
        },
        {
            field: 'employeeNumber',
            headerName: 'EmployeeNumber',
            width: 160,
        },
        {
            field: 'employeeSigDate',
            headerName: 'EmployeeSigDate',
            width: 160,
        },
        {
            field: 'employeeSignatureName',
            headerName: 'EmployeeSignatureName',
            width: 200,
        },
    ];

    return (
        <Box sx={{ height: 400, width: '100%', padding: '0 20px' }}>
            <DataGrid
                sx={{ borderRadius: '10px' }}
                rows={rows as GridRowsProp<DataTable>}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                onRowClick={(params) => { handleRowClick(params); }}
            />
        </Box>
    );
};
