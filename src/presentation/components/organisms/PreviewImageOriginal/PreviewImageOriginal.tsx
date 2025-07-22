import { FormPreview } from '@/presentation/components/molecules';
import './preview-image-original.scss';
import { PreviewTransform, PrimaryButton } from '@/presentation/components/atoms';
import { useImageSelectStore } from '@/store/zustand/useImageSelectstore';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '@/store/context/global/GlobalContext';

export function PreviewImageOriginal() {
    const { selectedFile, imageUrlOriginal, setImageUrlOriginal } = useContext(GlobalContext);

    useEffect(() => {
        if (selectedFile) {
            setImageUrlOriginal(URL.createObjectURL(selectedFile));
        }
    }, [selectedFile]);

    const [errorSizeFile, setErrorSizeFile] = useState(false);
    const { setImageUrl } = useImageSelectStore();
    const { setUrlImageExistent, setSelectedFile } = useContext(GlobalContext);

    const [isDisabled, setIsDisabled] = useState(true);

    const urlFetchPost = `http://localhost:8000/transform`;

    const handleSubmit = async () => {
        const allowedType = 'image/jpeg';

        if (selectedFile?.type !== allowedType) {
            console.warn(`El archivo "${selectedFile?.name}" no es una imagen JPEG válida.`);
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        const response = await fetch(urlFetchPost, {
            method: 'POST',
            body: formData,
        });

        const blob = await response.blob(); // ✅ leer como imagen

        const imageUrl = URL.createObjectURL(blob);

        setImageUrl(imageUrl);
        setUrlImageExistent(false);
        setSelectedFile(null);
        setIsDisabled(true);
    };

    return (
        <FormPreview>
            <div className="preview-image__title">
                <h2>Preview image original</h2>
                <p>Here you can see the image you have selected.</p>
            </div>
            <PreviewTransform
                urlImage={imageUrlOriginal || ''}
                text="No image to show, please select an image."
            />
            <PrimaryButton
                textButton="Transform Image"
                onClick={imageUrlOriginal ? handleSubmit : () => {}}
                disabled={imageUrlOriginal ? false : true}
            />
        </FormPreview>
    );
}
