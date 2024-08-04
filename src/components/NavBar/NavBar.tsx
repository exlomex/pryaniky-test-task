import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { UserSliceActions } from '../../store/reducers/UserSlice.ts';

export const NavBar = () => {
    const dispatch = useAppDispatch();
    function handleLogout() {
        dispatch(UserSliceActions.logout());
    }

    return (
        <Box
            height={60}
            sx={{
                display: 'flex', justifyContent: 'flex-end', padding: '0 20px', alignItems: 'center',
            }}

        >
            <Button
                onClick={handleLogout}
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
                Выйти
            </Button>
        </Box>
    );
};
