import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { Skeleton } from '@mui/material';
import { useEffect } from 'react';
import { classNames } from '../../lib/classNames.ts';
import { Table } from '../../components/Table';
import { NavBar } from '../../components/NavBar';
import { CrudButtons } from '../../components/CrudButtons';
import { getDataLoading } from '../../store/selectors/getDataValues.tsx';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { fetchDataTable } from '../../store/services/fetchDataTable.ts';
import { TableLayout } from '../../components/Layouts/TableLayout.tsx';

interface InfoPageProps {
    className?: string;
}

const InfoPage = (props: InfoPageProps) => {
    const { className } = props;

    const tableLoading = useSelector(getDataLoading);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchDataTable());
    }, [dispatch]);

    if (tableLoading) {
        return (
            <TableLayout/>
        );
    }
    return (
        <div className={classNames('', {}, [className])}>
            <NavBar/>
            <Table/>
            <CrudButtons/>
        </div>
    );
};

export default InfoPage;
