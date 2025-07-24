import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useRoutesProvider } from '@/presentation/routes/useRoutesProvider';
import { GlobalContextProvider } from '@/store/context/global/GlobalContext';
import { useTokenStore } from '@/store/zustand/useTokenstore';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
function AppContent() {
    const { isAuthenticated } = useTokenStore();
    const { AppRoutes } = useRoutesProvider({ token: isAuthenticated });
    return (_jsx(_Fragment, { children: _jsx(AppRoutes, {}) }));
}
function App() {
    return (_jsx(_Fragment, { children: _jsx(BrowserRouter, { children: _jsx(GlobalContextProvider, { children: _jsx(AppContent, {}) }) }) }));
}
export default App;
