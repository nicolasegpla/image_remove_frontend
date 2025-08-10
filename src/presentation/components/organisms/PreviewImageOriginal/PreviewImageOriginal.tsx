import { useContext, useEffect, useState } from 'react';

import { GlobalContext } from '@/store/context/global/GlobalContext';
import { useImageSelectStore } from '@/store/zustand/useImageSelectstore';
import {
    ButtonMini,
    CounterTokens,
    PreviewTransform,
    PrimaryButton,
} from '@/presentation/components/atoms';
import { ContainerButtons, FormPreview } from '@/presentation/components/molecules';
import usePostBlobImage from '@/presentation/viewmodels/customhooks/usePostBlob';
import { useTypeModelStore } from '@/store/zustand/useTypemodelStore';

import './preview-image-original.scss';
import { StopCircleIcon, StopIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/outline';

import {
    urlFetchPost,
    urlFetchPoststudio,
    urlFetchPostultra,
    urlFetchPostExterna,
} from '@/constants';
import { useTokenStore } from '@/store/zustand/useTokenstore';
import { useGetTokens } from '@/presentation/viewmodels/customhooks/useGetTokens';
import { useUserstore } from '@/store/zustand/useUserstore';

export function PreviewImageOriginal() {
    const { typeModel, setTypeModel } = useTypeModelStore();

    const {
        selectedFile,
        imageUrlOriginal,
        setImageUrlOriginal,
        setUrlImageExistent,
        setSelectedFile,
        urlImageExistent,
    } = useContext(GlobalContext);

    useEffect(() => {
        if (selectedFile) {
            setImageUrlOriginal(URL.createObjectURL(selectedFile));
        }
    }, [selectedFile]);

    const { setImageUrl, imageUrl } = useImageSelectStore();
    const { token } = useTokenStore();
    const { user } = useUserstore();

    const [abortController, setAbortController] = useState<AbortController | null>(null);

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
        token: token || undefined, // Pass the token if available
    });

    console.log('error', error);

    useEffect(() => {
        if (imageUrl) {
            setUrlImageExistent(false);
        }
    }, [imageUrl]);

    const url = 'https://buildtix.store/auth/users/'; // Replace with actual URL
    const userid = user?.id || ''; // Ensure user ID is available

    const { refresh, dataTokens } = useGetTokens(userid, url);

    const handlePostBlobImageWithGoogleAnalytics = () => {
        setImageUrl('');
        window.gtag('event', 'click_boton_transformar', {
            event_category: 'interacción',
            event_label: 'transformar imagen',
        });
        postBlobImage(refresh);
    };

    const handleCleanTransform = () => {
        setImageUrl('');
        setImageUrlOriginal(null);
        setSelectedFile(null);
        setUrlImageExistent(true);
    };

    useEffect(() => {
        refresh();
        const controller = new AbortController();
        setAbortController(controller);
        return () => {
            controller.abort();
            setTypeModel('express');
            setImageUrl('');
        };
    }, []);

    return (
        <FormPreview>
            {typeModel === 'external' && (
                <CounterTokens initialTokens={dataTokens} actualyTokens={10} />
            )}
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
                {/*loading && (
                    <ButtonMini onClick={handleAbortRequest}>
                        <StopCircleIcon className="button-mini__icon" />
                    </ButtonMini>
                )*/}
                {imageUrlOriginal && !loading && (
                    <ButtonMini onClick={handleCleanTransform}>
                        <TrashIcon className="button-mini__icon-trash" />
                    </ButtonMini>
                )}
            </ContainerButtons>
            {error === '⛔ Prohibido (403) - No tienes permisos.' && (
                <div className="error-credits">
                    <p>No tienes creditos suficientes para esta operacion</p>
                </div>
            )}
        </FormPreview>
    );
}
