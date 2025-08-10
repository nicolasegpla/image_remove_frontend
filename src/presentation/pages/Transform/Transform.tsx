import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';

import {
    ButtonMiniMenu,
    CollapsibleMenu,
    ContainerLogo,
    Infobutton,
    LogoImage,
    Modal,
    NavBar,
    SelectModel,
} from '@/presentation/components';
import {
    Information,
    PreviewImage,
    PreviewImageOriginal,
    SelectImage,
} from '@/presentation/components/organisms';
import { LayoutTransform, PrimaryContainerContentLayout } from '@/presentation/layouts';
import { useTokenStore } from '@/store/zustand/useTokenstore';
import { useTypeModelStore } from '@/store/zustand/useTypemodelStore';
import { GlobalContext } from '@/store/context/global/GlobalContext';
import { useUserstore } from '@/store/zustand/useUserstore';
import { useNavigateService } from '@/presentation/routes/useNavigateService/useNavigateService';
import { useImageSelectStore } from '@/store/zustand/useImageSelectstore';

function Transform() {
    const {
        modal,
        setModal,
        collapsibleMenu,
        setCollapsibleMenu,
        //openSelectDije,
        setOpenSelectDije,
        setImageUrlOriginal,
        setSelectedFile,
        setOpenSelectModel,
        openSelectModel,
    } = useContext(GlobalContext);

    const { setToken } = useTokenStore();
    const { user } = useUserstore();
    const navigate = useNavigate();

    const handleLogOut = () => {
        sessionStorage.removeItem('session');
        setToken('');
        navigate('/login');
    };

    const { setTypeModel, typeModel } = useTypeModelStore();

    const handleClickOutside = (event: MouseEvent) => {
        const collapsibleMenuElement = document.querySelector('.collapsible-menu');
        const buttonMiniMenu = document.querySelector('.button-mini-menu');
        const selectModelElement = document.querySelector('.select-model');
        const selectModelButton = document.querySelector('.select-model__button');

        if (
            collapsibleMenuElement &&
            buttonMiniMenu &&
            !collapsibleMenuElement.contains(event.target as Node) &&
            !buttonMiniMenu.contains(event.target as Node) &&
            collapsibleMenu
        ) {
            setCollapsibleMenu(false);
        } else if (
            selectModelElement &&
            selectModelButton &&
            !selectModelElement.contains(event.target as Node) &&
            !selectModelButton.contains(event.target as Node) &&
            openSelectModel
        ) {
            setOpenSelectModel(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [collapsibleMenu, openSelectModel]);

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

    const { setImageUrl } = useImageSelectStore();

    const handleSelectTypeModel = (value: string) => {
        setTypeModel(value);
        setOpenSelectModel(false);
    };

    class TypeModel {
        id: string;
        value: string;
        label: string;
        onChange: (value: string) => void;
        constructor(id: string, value: string, label: string, onChange: (value: string) => void) {
            this.id = id;
            this.value = value;
            this.label = label;
            this.onChange = onChange;
        }
    }

    const dataOptionsModels: TypeModel[] = [
        new TypeModel('express', 'express', 'ClearCut', (value: string) =>
            handleSelectTypeModel(value)
        ),
        new TypeModel('studio', 'studio', 'HumanPro', (value: string) =>
            handleSelectTypeModel(value)
        ),
        new TypeModel('external', 'external', 'UltraClean', (value: string) =>
            handleSelectTypeModel(value)
        ),
    ];

    useEffect(() => {
        return () => {
            setCollapsibleMenu(false);
            setImageUrl('');
            setImageUrlOriginal('');
            setSelectedFile(null);
            setOpenSelectModel(false);
            setOpenSelectDije(false);
            setModal(false);
        };
    }, []);

    return (
        <LayoutTransform>
            <ContainerLogo>
                <LogoImage />
            </ContainerLogo>
            <NavBar>
                <SelectModel
                    model={typeModel}
                    data={dataOptionsModels}
                    selectIsOpen={openSelectModel}
                    onClick={() => setOpenSelectModel(!openSelectModel)}
                />
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
            {/*openSelectDije && (
                <Modal>
                    <ModuloDijeSelect>
                        <BUttonClosed onClick={() => setOpenSelectDije(false)} />
                        <h1>modulo</h1>
                        <HeartImageCanvas imageUrl={imageUrl} />
                    </ModuloDijeSelect>
                </Modal>
            )*/}
        </LayoutTransform>
    );
}

export default Transform;
