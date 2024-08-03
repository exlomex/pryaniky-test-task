import { Route, Routes } from 'react-router-dom';
import { AboutPage } from '../../pages/InfoPage';
import { MainPage } from '../../pages/MainPage';

export const AppRouter = () => (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
        </Routes>
);
