import { PreviewTransform, PrimaryButton } from '@/presentation/components/atoms';
import { FormSelectImage } from '@/presentation/components/molecules';
import './preview-image.scss';
import { useImageSelectStore } from '@/store/zustand/useImageSelectstore';
import { useTokenStore } from '@/store/zustand/useTokenstore';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '@/store/context/global/GlobalContext';

export function PreviewImage() {
    const { imageUrl } = useImageSelectStore();
    const { setToken } = useTokenStore();
    const navigate = useNavigate();
    const { urlImageExistent } = useContext(GlobalContext);

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
            <div className="preview-image__title">
                <h2>Preview image</h2>
                <p>Here you can see the image you have uploaded.</p>
            </div>
            <PreviewTransform urlImage={imageUrl} />
            <PrimaryButton
                textButton="Download Image"
                onClick={handleDownload}
                disabled={urlImageExistent}
            />
        </FormSelectImage>
    );
}
