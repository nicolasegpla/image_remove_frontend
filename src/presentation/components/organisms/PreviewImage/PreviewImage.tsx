import { useContext, useEffect } from 'react';

import { GlobalContext } from '@/store/context/global/GlobalContext';
import { useImageSelectStore } from '@/store/zustand/useImageSelectstore';
import { ContainerButtons, FormPreview } from '@/presentation/components/molecules';
import {
    ButtonEditImage,
    ButtonMini,
    DijeSelect,
    PreviewTransform,
    PrimaryButton,
} from '@/presentation/components/atoms';

import './preview-image.scss';
import { RectangleGroupIcon, TrashIcon } from '@heroicons/react/24/outline';

export function PreviewImage() {
    const { imageUrl, setImageUrl } = useImageSelectStore();
    const {
        setUrlImageExistent,
        urlImageExistent,
        setImageUrlOriginal,
        setSelectedFile,
        setOpenSelectDije,
        setOpenEditImage,
    } = useContext(GlobalContext);

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

    const handleClickOpenEditImage = () => {
        setOpenEditImage(true);
    };

    useEffect(() => {
        return () => {
            setImageUrl('');
            setImageUrlOriginal(null);
            setSelectedFile(null);
            setUrlImageExistent(true);
        };
    }, []);

    return (
        <FormPreview>
            <PreviewTransform
                urlImage={imageUrl}
                title="Preview image transformed"
                description="Here you can see the image you have transformed."
            />
            <ContainerButtons>
                <PrimaryButton
                    textButton="Download"
                    onClick={!urlImageExistent ? handleDownloadWithGoogleAnalytics : () => {}}
                    disabled={urlImageExistent}
                />
                {/*!urlImageExistent && (
                    <DijeSelect onClick={() => setOpenSelectDije(true)}>
                        <RectangleGroupIcon className="button-mini__icon-trash" />
                    </DijeSelect>
                )*/}
                {!urlImageExistent && <ButtonEditImage onClick={handleClickOpenEditImage} />}
                {!urlImageExistent && (
                    <ButtonMini onClick={handleCleanTransform}>
                        <TrashIcon className="button-mini__icon-trash" />
                    </ButtonMini>
                )}
            </ContainerButtons>
        </FormPreview>
    );
}
