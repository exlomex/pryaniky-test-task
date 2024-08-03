import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material';
import { red } from '@mui/material/colors';
import { classNames } from '../../lib/classNames.ts';

interface TableProps {
    className?: string;
}

export const Table = (props: TableProps) => {
    const { className } = props;

    const theme = createTheme({
        palette: {
            primary: {
                main: red[300],
            },
            secondary: {
                main: red[100],
            },
        },
    });

    const rows = [
        {
            id: 1, lastName: 'Snow', firstName: 'Jon', age: 14,
        },
        {
            id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31,
        },
    ];

    const columns: GridColDef<(typeof rows)[number]>[] = [
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
            width: 150,
            editable: true,
        },
        {
            field: 'documentName',
            headerName: 'DocumentName',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'documentStatus',
            headerName: 'DocumentStatus',
            width: 160,
        },
        {
            field: 'documentType',
            headerName: 'DocumentType',
            width: 160,
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
            width: 160,
        },
    ];

    return (
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="lg" sx={{ mt: 3 }}>
                    <Box sx={{ height: 400, width: '100%' }}>
                        <DataGrid
                            sx={{ borderRadius: '12px' }}
                            rows={rows}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 5,
                                    },
                                },
                            }}
                            pageSizeOptions={[5]}
                            checkboxSelection
                            disableRowSelectionOnClick
                        />
                    </Box>
                </Container>
            </ThemeProvider>
    );
};
