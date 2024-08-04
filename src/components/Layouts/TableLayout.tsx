import Box from '@mui/material/Box';
import { Skeleton } from '@mui/material';
import { NavBar } from '../NavBar';

export const TableLayout = () => (
        <Box>
            <NavBar/>
            <Box sx={{
                height: 400, width: '100%', padding: '0 20px', display: 'flex', gap: '10px 0', flexDirection: 'column',
            }}>
                <Skeleton
                    sx={{ bgcolor: 'grey.300' }}
                    variant="rounded"
                    width={'100%'}
                    height={60}
                />
                <Skeleton
                    sx={{ bgcolor: 'grey.300' }}
                    variant="rounded"
                    width={'100%'}
                    height={60}
                />
                <Skeleton
                    sx={{ bgcolor: 'grey.300' }}
                    variant="rounded"
                    width={'100%'}
                    height={60}
                />
                <Skeleton
                    sx={{ bgcolor: 'grey.300' }}
                    variant="rounded"
                    width={'100%'}
                    height={60}
                />

                <Box sx={{
                    display: 'flex', gap: '0 10px', justifyContent: 'center',
                }}>
                    <Skeleton
                        sx={{ bgcolor: 'grey.300' }}
                        variant="rounded"
                        width={'20%'}
                        height={35}
                    />
                    <Skeleton
                        sx={{ bgcolor: 'grey.300' }}
                        variant="rounded"
                        width={'20%'}
                        height={35}
                    />
                    <Skeleton
                        sx={{ bgcolor: 'grey.300' }}
                        variant="rounded"
                        width={'20%'}
                        height={35}
                    />
                </Box>
            </Box>
        </Box>
);
