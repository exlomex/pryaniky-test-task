import { Route, Routes } from 'react-router-dom';
import { AboutPage } from '../../pages/InfoPage';
import { MainPage } from '../../pages/MainPage';
import { RequireAuth } from '../RequireAuth';
import { RequireGuest } from '../RequireGuest';

export const AppRouter = () => (
        <Routes>
            <Route path="/" element={
                <RequireGuest>
                    <MainPage/>
                </RequireGuest>
            }/>
            <Route path="/about" element={
                <RequireAuth>
                    <AboutPage/>
                </RequireAuth>
            }/>
        </Routes>
);
