import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: red[300],
        },
        secondary: {
            main: red[100],
        },
    },
});
