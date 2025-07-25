import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '@/store/context/global/GlobalContext';
import { useImageSelectStore } from '@/store/zustand/useImageSelectstore';
import { PreviewTransform, PrimaryButton } from '@/presentation/components/atoms';
import { FormPreview } from '@/presentation/components/molecules';
import usePostBlobImage from '@/presentation/viewmodels/customhooks/usePostBlob';
import './preview-image-original.scss';
export function PreviewImageOriginal() {
    const { selectedFile, imageUrlOriginal, setImageUrlOriginal, setUrlImageExistent, setSelectedFile, } = useContext(GlobalContext);
    useEffect(() => {
        if (selectedFile) {
            setImageUrlOriginal(URL.createObjectURL(selectedFile));
        }
    }, [selectedFile]);
    const { setImageUrl, imageUrl } = useImageSelectStore();
    const [abortController, setAbortController] = useState(null);
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
    });
    useEffect(() => {
        if (imageUrl) {
            setUrlImageExistent(false);
        }
    }, [imageUrl]);
    useEffect(() => {
        const controller = new AbortController();
        setAbortController(controller);
        return () => {
            controller.abort();
        };
    }, []);
    return (_jsxs(FormPreview, { children: [_jsxs("div", { className: "preview-image__title", children: [_jsx("h2", { children: "Preview image original" }), _jsx("p", { children: "Here you can see the image you have selected." })] }), _jsx(PreviewTransform, { urlImage: imageUrlOriginal || '', text: "No image to show, please select an image." }), _jsx(PrimaryButton, { textButton: loading ? 'Transforming...' : 'Transform Image', onClick: imageUrlOriginal ? (loading ? () => { } : () => postBlobImage()) : () => { }, disabled: imageUrlOriginal ? false : true, loading: loading }), loading && (_jsx(PrimaryButton, { textButton: "Abort Request", onClick: handleAbortRequest, disabled: false }))] }));
}
