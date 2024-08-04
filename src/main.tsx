import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { App } from './App.tsx';
import './styles/index.scss';
import { StoreProvider } from './components/Providers/StoreProvider';
import { theme } from './const/muiTheme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
