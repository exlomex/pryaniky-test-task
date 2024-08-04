import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { fetchDataTable } from '../../store/services/fetchDataTable.ts';
import { DataTable } from '../../store/reducers/DataSliceSchema.ts';
import { getDataTables } from '../../store/selectors/getDataValues.tsx';

interface TableProps {
    className?: string;
}

export const Table = (props: TableProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchDataTable());
    }, [dispatch]);

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

                    <Box sx={{ height: 400, width: '100%' }}>
                        <DataGrid
                            sx={{ borderRadius: '12px' }}
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
                            disableRowSelectionOnClick
                            onRowClick={(params, event, details) => { console.log(params.id); }}
                        />
                    </Box>
    );
};
