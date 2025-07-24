import { useNavigate } from 'react-router-dom';

import { ButtonLogOut, NavBar, PrimaryButton } from '@/presentation/components';
import {
    PreviewImage,
    PreviewImageOriginal,
    SelectImage,
} from '@/presentation/components/organisms';
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
        setToken(false);
        navigate('/login');
    };

    return (
        <LayoutTransform>
            <NavBar>
                <h2 style={{ color: '#ffffff' }}>Image Transform</h2>
                <ButtonLogOut onClick={handleLogOut} />
            </NavBar>
            <PrimaryContainerContentLayout>
                <PreviewImageOriginal />
                <PreviewImage />
            </PrimaryContainerContentLayout>
            <SelectImage />
        </LayoutTransform>
    );
}

export default Transform;
