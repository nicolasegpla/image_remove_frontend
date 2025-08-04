import {
    ButtonMiniMenu,
    CollapsibleMenu,
    ContainerLogo,
    LogoImage,
    NavBar,
} from '@/presentation/components';
import { LayoutAdmin } from '@/presentation/layouts';
import { useNavigateService } from '@/presentation/routes/useNavigateService/useNavigateService';
import { GlobalContext } from '@/store/context/global/GlobalContext';
import { useTokenStore } from '@/store/zustand/useTokenstore';
import { useUserstore } from '@/store/zustand/useUserstore';
import { useContext } from 'react';

function ModuloAdmin() {
    const { collapsibleMenu, setCollapsibleMenu } = useContext(GlobalContext);
    const { user } = useUserstore();
    const { setToken } = useTokenStore();

    const { navigateToModuloAdmin, navigateToTransform, navigateToLogin } = useNavigateService();

    const handleLogOut = () => {
        sessionStorage.removeItem('session');
        setToken('');
        navigateToLogin();
    };

    const groupFnNavigate = [
        {
            title: 'Transform',
            onClick: () => navigateToTransform(),
        },
        {
            title: 'Modulo Admin',
            onClick: () => navigateToModuloAdmin(),
        },
    ];
    return (
        <LayoutAdmin>
            <ContainerLogo>
                <LogoImage />
            </ContainerLogo>
            <NavBar>
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
        </LayoutAdmin>
    );
}

export default ModuloAdmin;
