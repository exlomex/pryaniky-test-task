import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { ReactElement } from 'react';
import { getUserAuth } from '../../store/selectors/getUserAuth.tsx';

interface RequireAuthProps {
    children: ReactElement;
}

export function RequireAuth({ children }: RequireAuthProps) {
    const auth = useSelector(getUserAuth);
    const location = useLocation();

    if (!auth) {
        return (
            <Navigate to={'/'} state={{ from: location }} replace />
        );
    }

    return children;
}
