import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { fetchDataTable } from '../../store/services/fetchDataTable.ts';
import { DataTable } from '../../store/reducers/DataSliceSchema.ts';
import { getDataLoading, getDataTables } from '../../store/selectors/getDataValues.tsx';
import cls from './Table.module.scss';

interface TableProps {
    className?: string;
}

export const Table = (props: TableProps) => {
    const { className } = props;

    const rows = useSelector(getDataTables);

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
                onRowClick={(params) => { console.log(params.id); }}
            />
        </Box>
    );
};
