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
import { PickList } from '@/presentation/components/atoms/PickList/PickList';
import { useTypeModelStore } from '@/store/zustand/useTypemodelStore';

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

    const { typeModel, setTypeModel } = useTypeModelStore();

    const handleChangeTypeModel = (value: string) => {
        setTypeModel(value);
    };

    return (
        <LayoutTransform>
            <ContainerLogo />
            <NavBar>
                <PickList onChange={handleChangeTypeModel} />
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
