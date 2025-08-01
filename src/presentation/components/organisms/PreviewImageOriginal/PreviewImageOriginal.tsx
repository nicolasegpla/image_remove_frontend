import { useContext, useEffect, useState } from 'react';

import { GlobalContext } from '@/store/context/global/GlobalContext';
import { useImageSelectStore } from '@/store/zustand/useImageSelectstore';
import { ButtonMini, PreviewTransform, PrimaryButton } from '@/presentation/components/atoms';
import { ContainerButtons, FormPreview } from '@/presentation/components/molecules';
import usePostBlobImage from '@/presentation/viewmodels/customhooks/usePostBlob';
import { useTypeModelStore } from '@/store/zustand/useTypemodelStore';

import './preview-image-original.scss';
import { StopCircleIcon, StopIcon } from '@heroicons/react/24/outline';

import {
    urlFetchPost,
    urlFetchPoststudio,
    urlFetchPostultra,
    urlFetchPostExterna,
} from '@/constants';

export function PreviewImageOriginal() {
    const { typeModel } = useTypeModelStore();

    const {
        selectedFile,
        imageUrlOriginal,
        setImageUrlOriginal,
        setUrlImageExistent,
        setSelectedFile,
    } = useContext(GlobalContext);

    useEffect(() => {
        if (selectedFile) {
            setImageUrlOriginal(URL.createObjectURL(selectedFile));
        }
    }, [selectedFile]);

    const { setImageUrl, imageUrl } = useImageSelectStore();

    const [abortController, setAbortController] = useState<AbortController | null>(null);

    console.log(abortController);

    const handleAbortRequest = () => {
        if (abortController) {
            abortController.abort();
            setImageUrl('');
            setImageUrlOriginal('');
            setSelectedFile(null);
            const controller = new AbortController();
            setAbortController(controller);
        }
    };

    const { loading, error, postBlobImage } = usePostBlobImage({
        data: selectedFile,
        setStateImageUrl: setImageUrl,
        signalAbort: abortController?.signal,
        url:
            typeModel === 'express'
                ? urlFetchPost
                : typeModel === 'studio'
                  ? urlFetchPoststudio
                  : typeModel === 'ultra'
                    ? urlFetchPostultra
                    : urlFetchPostExterna,
    });

    useEffect(() => {
        if (imageUrl) {
            setUrlImageExistent(false);
        }
    }, [imageUrl]);

    const handlePostBlobImageWithGoogleAnalytics = () => {
        window.gtag('event', 'click_boton_transformar', {
            event_category: 'interacción',
            event_label: 'transformar imagen',
        });
        postBlobImage();
    };

    useEffect(() => {
        const controller = new AbortController();
        setAbortController(controller);
        return () => {
            controller.abort();
        };
    }, []);

    return (
        <FormPreview>
            <PreviewTransform
                urlImage={imageUrlOriginal || ''}
                text="No image to show, please select an image."
                title="Preview image original"
                description="Here you can see the image you have selected."
            />
            <ContainerButtons>
                <PrimaryButton
                    textButton={loading ? 'Transforming...' : 'Transform'}
                    onClick={
                        imageUrlOriginal
                            ? loading
                                ? () => {}
                                : () => handlePostBlobImageWithGoogleAnalytics()
                            : () => {}
                    }
                    disabled={imageUrlOriginal ? false : true}
                    loading={loading}
                />
                {loading && (
                    <ButtonMini onClick={handleAbortRequest}>
                        <StopCircleIcon className="button-mini__icon" />
                    </ButtonMini>
                )}
            </ContainerButtons>
        </FormPreview>
    );
}
