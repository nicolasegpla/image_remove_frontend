import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useRoutesProvider } from '@/presentation/routes/useRoutesProvider';

import './App.scss';
import { useTokenStore } from '@/store/zustand/useTokenstore';

function AppContent() {
    const { token } = useTokenStore();
    const session = sessionStorage.getItem('session');
    const [tokenY, setTokenY] = useState<boolean>(false);
    const sessionParsed = session ? JSON.parse(session) : null;

    useEffect(() => {
        if (sessionParsed) {
            setTokenY(sessionParsed.token ? true : false);
        }
    }, [token]);

    const { AppRoutes } = useRoutesProvider({ token: tokenY });

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
                <AppContent />
            </BrowserRouter>
        </>
    );
}

export default App;
