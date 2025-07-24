import { jsx as _jsx } from "react/jsx-runtime";
import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginLoginPage';
function useRoutesProvider({ token }) {
    const Transform = lazy(() => import('../pages/Transform/Transform'));
    const AppRoutes = () => {
        let routes = useRoutes([
            {
                path: '/',
                element: _jsx(Navigate, { to: "/login", replace: true }),
            },
            {
                path: '/login',
                element: _jsx(LoginPage, {}),
            },
            {
                path: '/transform',
                element: token ? (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(Transform, {}) })) : (_jsx(Navigate, { to: "/login", replace: true })),
            },
        ]);
        return routes;
    };
    return {
        AppRoutes,
    };
}
export { useRoutesProvider };
