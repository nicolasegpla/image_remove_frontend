import { useRoutesProvider } from '@/presentation/routes/useRoutesProvider';
import { GlobalContextProvider } from '@/store/context/global/GlobalContext';
import { useTokenStore } from '@/store/zustand/useTokenstore';

import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { useEffect } from 'react';

function AppContent() {
    const setToken = useTokenStore((state) => state.setToken);

    useEffect(() => {
        const session = sessionStorage.getItem('session');
        if (session) {
            const parsed = JSON.parse(session);
            if (parsed?.token) {
                setToken(parsed.token);
            }
        }
    }, [setToken]);

    const { isAuthenticated } = useTokenStore();
    const { AppRoutes } = useRoutesProvider({ token: isAuthenticated });
    return (
        <>
            <AppRoutes />
        </>
    );
}

function App() {
    return (
        <>
            <BrowserRouter>
                <GlobalContextProvider>
                    <AppContent />
                </GlobalContextProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
