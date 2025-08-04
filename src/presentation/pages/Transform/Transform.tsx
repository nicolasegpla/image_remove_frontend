import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import {
    ButtonLogOut,
    ButtonMiniMenu,
    CollapsibleMenu,
    ContainerLogo,
    Infobutton,
    LogoImage,
    Modal,
    NavBar,
    SwitchComponent,
} from '@/presentation/components';
import {
    Information,
    PreviewImage,
    PreviewImageOriginal,
    SelectImage,
} from '@/presentation/components/organisms';
import { LayoutTransform, PrimaryContainerContentLayout } from '@/presentation/layouts';
import { useTokenStore } from '@/store/zustand/useTokenstore';
import { PickList } from '@/presentation/components/atoms/PickList/PickList';
import { useTypeModelStore } from '@/store/zustand/useTypemodelStore';
import { GlobalContext } from '@/store/context/global/GlobalContext';
import { useUserstore } from '@/store/zustand/useUserstore';
import { title } from 'process';
import { useNavigateService } from '@/presentation/routes/useNavigateService/useNavigateService';

function Transform() {
    const { modal, setModal, collapsibleMenu, setCollapsibleMenu } = useContext(GlobalContext);

    const { setToken } = useTokenStore();
    const { user } = useUserstore();
    const navigate = useNavigate();

    console.log('User:', user);

    const handleLogOut = () => {
        sessionStorage.removeItem('session');
        setToken('');
        navigate('/login');
    };

    const { setTypeModel } = useTypeModelStore();

    const handleChangeTypeModel = (value: string) => {
        setTypeModel(value);
    };

    const handleClickOutside = (event: MouseEvent) => {
        const collapsibleMenuElement = document.querySelector('.collapsible-menu');
        const buttonMiniMenu = document.querySelector('.button-mini-menu');

        if (
            collapsibleMenuElement &&
            buttonMiniMenu &&
            !collapsibleMenuElement.contains(event.target as Node) &&
            !buttonMiniMenu.contains(event.target as Node) &&
            collapsibleMenu
        ) {
            setCollapsibleMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [collapsibleMenu]);

    const { navigateToModuloAdmin } = useNavigateService();

    const groupFnNavigate = [
        {
            title: 'Transform',
            onClick: () => navigate('/transform'),
        },
        {
            title: 'Modulo Admin',
            onClick: () => navigateToModuloAdmin(),
        },
    ];

    useEffect(() => {
        return () => {
            setCollapsibleMenu(false);
        };
    }, []);

    return (
        <LayoutTransform>
            <ContainerLogo>
                <LogoImage />
            </ContainerLogo>
            <NavBar>
                <PickList onChange={handleChangeTypeModel} />
                {/*<ButtonLogOut onClick={handleLogOut} />*/}
                <ButtonMiniMenu onClick={() => setCollapsibleMenu(!collapsibleMenu)} />
                {collapsibleMenu && (
                    <CollapsibleMenu
                        groupFn={groupFnNavigate}
                        onClick={handleLogOut}
                        isadmin={user ? user.type_user : 'Client'}
                    />
                )}
            </NavBar>
            <PrimaryContainerContentLayout>
                <PreviewImageOriginal />
                <PreviewImage />
            </PrimaryContainerContentLayout>
            <SelectImage />
            <Infobutton onClick={() => setModal(true)} />
            {modal && (
                <Modal>
                    <Information />
                </Modal>
            )}
        </LayoutTransform>
    );
}

export default Transform;
