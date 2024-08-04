import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@mui/material';
import { getDataLoading } from '../../store/selectors/getDataValues.tsx';

export const CrudButtons = () => {
    const HandleAddData = useCallback(() => {

    }, []);

    const HandleEditData = useCallback(() => {

    }, []);

    const HandleDeleteData = useCallback(() => {

    }, []);

    const matches = useMediaQuery('(max-width:500px)');

    return (
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
                }}
                disabled
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
                }}
                disabled
            >
                Удалить
            </Button>
        </Box>
    );
};
