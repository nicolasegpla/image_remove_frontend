import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import LoginPage from '../pages/LoginPage/LoginLoginPage';

interface UseRoutesProviderProps {
    token: boolean;
}

function useRoutesProvider({ token }: UseRoutesProviderProps) {
    const Transform = lazy(() => import('../pages/Transform/Transform'));

    const AppRoutes = () => {
        let routes = useRoutes([
            {
                path: '/',
                element: <Navigate to="/login" replace />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },

            {
                path: '/transform',
                element: token ? (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Transform />
                    </Suspense>
                ) : (
                    <Navigate to="/login" replace />
                ),
            },
        ]);
        return routes;
    };

    return {
        AppRoutes,
    };
}

export { useRoutesProvider };
