import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { ButtonLogOut, NavBar } from '@/presentation/components';
import { PreviewImage, PreviewImageOriginal, SelectImage, } from '@/presentation/components/organisms';
import { LayoutTransform, PrimaryContainerContentLayout } from '@/presentation/layouts';
import { useTokenStore } from '@/store/zustand/useTokenstore';
function Transform() {
    const urlFetchPost = `http://localhost:8000/test`;
    const handleGet = async () => {
        const response = await fetch(urlFetchPost);
        const data = await response.json();
        console.log(data);
    };
    const { setToken } = useTokenStore();
    const navigate = useNavigate();
    const handleLogOut = () => {
        sessionStorage.removeItem('session');
        setToken('');
        navigate('/login');
    };
    return (_jsxs(LayoutTransform, { children: [_jsxs(NavBar, { children: [_jsx("h2", { style: { color: '#ffffff' }, children: "Image Transform" }), _jsx(ButtonLogOut, { onClick: handleLogOut })] }), _jsxs(PrimaryContainerContentLayout, { children: [_jsx(PreviewImageOriginal, {}), _jsx(PreviewImage, {})] }), _jsx(SelectImage, {})] }));
}
export default Transform;
