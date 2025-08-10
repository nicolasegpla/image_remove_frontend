import { useContext } from 'react';

import {
    ButtonMiniMenu,
    CollapsibleMenu,
    ContainerLogo,
    LogoImage,
    NavBar,
    TableAllUser,
} from '@/presentation/components';
import { LayoutAdmin } from '@/presentation/layouts';
import { useNavigateService } from '@/presentation/routes/useNavigateService/useNavigateService';
import { useGetAllUsers } from '@/presentation/viewmodels/customhooks/useGetAllUsers';
import { GlobalContext } from '@/store/context/global/GlobalContext';
import { useTokenStore } from '@/store/zustand/useTokenstore';
import { useUserstore } from '@/store/zustand/useUserstore';
import { useUserStore } from '@/store/zustand/useUserSelectAdminStore';

function ModuloAdmin() {
    const { collapsibleMenu, setCollapsibleMenu, setOpenSelectUserFromAdmin } =
        useContext(GlobalContext);
    const { user } = useUserstore();
    const { setToken } = useTokenStore();
    const { setUser, user: userAdminSelect } = useUserStore();

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

    const { dataUsers } = useGetAllUsers('http://localhost:8000/auth/users');

    console.log('dataUsers:', dataUsers);

    interface User {
        id: string;
        email: string;
        id_api: string;
        status: boolean;
        tokens: number;
        type_user: string;
        country: string;
    }

    function openInfoUser(user: User) {
        setOpenSelectUserFromAdmin(true);
        setUser(user);
    }

    console.log('userAdminSelect:', userAdminSelect);

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
            <TableAllUser dataUsers={dataUsers} openInfoUser={openInfoUser} />
        </LayoutAdmin>
    );
}

export default ModuloAdmin;
