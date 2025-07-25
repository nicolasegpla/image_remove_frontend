import { useContext } from 'react';

import { GlobalContext } from '@/store/context/global/GlobalContext';
import { useImageSelectStore } from '@/store/zustand/useImageSelectstore';
import { FormPreview } from '@/presentation/components/molecules';
import { PreviewTransform, PrimaryButton } from '@/presentation/components/atoms';

import './preview-image.scss';

export function PreviewImage() {
    const { imageUrl, setImageUrl } = useImageSelectStore();
    const { setUrlImageExistent, urlImageExistent, setImageUrlOriginal, setSelectedFile } =
        useContext(GlobalContext);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'image.jpg';
        link.click();
    };

    const handleDownloadWithGoogleAnalytics = () => {
        window.gtag('event', 'click_boton_descargar', {
            event_category: 'interacción',
            event_label: 'descargar imagen',
        });
        handleDownload();
    };

    const handleCleanTransform = () => {
        setImageUrl('');
        setImageUrlOriginal(null);
        setSelectedFile(null);
        setUrlImageExistent(true);
    };

    return (
        <FormPreview>
            <div className="preview-image__title">
                <h2>Preview image transformed</h2>
                <p>Here you can see the image you have transformed.</p>
            </div>
            <PreviewTransform urlImage={imageUrl} />
            <PrimaryButton
                textButton="Download Image"
                onClick={!urlImageExistent ? handleDownloadWithGoogleAnalytics : () => {}}
                disabled={urlImageExistent}
            />
            {!urlImageExistent && (
                <PrimaryButton
                    textButton="Clean transform"
                    onClick={handleCleanTransform}
                    disabled={false}
                />
            )}
        </FormPreview>
    );
}
