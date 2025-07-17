import { PreviewTransform, PrimaryButton } from '@/presentation/components/atoms';
import { FormSelectImage } from '@/presentation/components/molecules';
import './preview-image.scss';
import { useImageSelectStore } from '@/store/zustand/useImageSelectstore';
import { useTokenStore } from '@/store/zustand/useTokenstore';
import { useNavigate } from 'react-router-dom';

export function PreviewImage() {
    const { imageUrl } = useImageSelectStore();
    const { setToken } = useTokenStore();
    const navigate = useNavigate();

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'image.jpg';
        link.click();
    };

    const handleLogOut = () => {
        sessionStorage.removeItem('session');
        setToken(false);
        navigate('/login');
    };

    return (
        <FormSelectImage>
            <PreviewTransform urlImage={imageUrl} />
            <PrimaryButton textButton="Descargar imagen" onClick={handleDownload} />
            <PrimaryButton textButton="LogOut" onClick={handleLogOut} />
        </FormSelectImage>
    );
}
