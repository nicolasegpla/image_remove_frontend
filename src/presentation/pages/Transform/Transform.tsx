import { ButtonLogOut, NavBar, PrimaryButton } from '@/presentation/components';
import { PreviewImage, SelectImage } from '@/presentation/components/organisms';
import { LayoutTransform, PrimaryContainerContentLayout } from '@/presentation/layouts';
import { useTokenStore } from '@/store/zustand/useTokenstore';
import { useNavigate } from 'react-router-dom';

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
                <h2 style={{ color: '#ffffff' }}>Logo</h2>
                <ButtonLogOut onClick={handleLogOut} />
            </NavBar>
            <PrimaryContainerContentLayout>
                <SelectImage />
                <PreviewImage />
            </PrimaryContainerContentLayout>
            {/* <PrimaryButton textButton="get" onClick={handleGet} /> */}
        </LayoutTransform>
    );
}

export default Transform;
