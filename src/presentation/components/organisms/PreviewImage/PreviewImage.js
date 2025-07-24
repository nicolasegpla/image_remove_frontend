import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { GlobalContext } from '@/store/context/global/GlobalContext';
import { useImageSelectStore } from '@/store/zustand/useImageSelectstore';
import { FormPreview } from '@/presentation/components/molecules';
import { PreviewTransform, PrimaryButton } from '@/presentation/components/atoms';
import './preview-image.scss';
export function PreviewImage() {
    const { imageUrl, setImageUrl } = useImageSelectStore();
    const { setUrlImageExistent, urlImageExistent, setImageUrlOriginal, setSelectedFile } = useContext(GlobalContext);
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'image.jpg';
        link.click();
    };
    const handleCleanTransform = () => {
        setImageUrl('');
        setImageUrlOriginal(null);
        setSelectedFile(null);
        setUrlImageExistent(true);
    };
    return (_jsxs(FormPreview, { children: [_jsxs("div", { className: "preview-image__title", children: [_jsx("h2", { children: "Preview image transformed" }), _jsx("p", { children: "Here you can see the image you have transformed." })] }), _jsx(PreviewTransform, { urlImage: imageUrl }), _jsx(PrimaryButton, { textButton: "Download Image", onClick: !urlImageExistent ? handleDownload : () => { }, disabled: urlImageExistent }), !urlImageExistent && (_jsx(PrimaryButton, { textButton: "Clean transform", onClick: handleCleanTransform, disabled: false }))] }));
}
