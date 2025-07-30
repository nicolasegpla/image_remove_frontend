import { useNavigate } from 'react-router-dom';

import { ButtonLogOut, ContainerLogo, NavBar, SwitchComponent } from '@/presentation/components';
import {
    PreviewImage,
    PreviewImageOriginal,
    SelectImage,
} from '@/presentation/components/organisms';
import { LayoutTransform, PrimaryContainerContentLayout } from '@/presentation/layouts';
import { useTokenStore } from '@/store/zustand/useTokenstore';
import { useState } from 'react';

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

    const [isActive, setIsActive] = useState(false);

    return (
        <LayoutTransform>
            <ContainerLogo />
            <NavBar>
                <SwitchComponent onClick={() => setIsActive(!isActive)} ProisActive={isActive} />
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
