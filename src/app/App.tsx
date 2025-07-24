import { useRoutesProvider } from '@/presentation/routes/useRoutesProvider';
import { GlobalContextProvider } from '@/store/context/global/GlobalContext';
import { useTokenStore } from '@/store/zustand/useTokenstore';

import { BrowserRouter } from 'react-router-dom';
import './App.scss';

function AppContent() {
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
