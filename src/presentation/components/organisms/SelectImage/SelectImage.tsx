import React, { useContext, useState } from 'react';

import { FormSelectImage } from '@/presentation/components/molecules';
import { InputSelectImage, PrimaryButton } from '@/presentation/components/atoms';
import { useImageSelectStore } from '@/store/zustand/useImageSelectstore';

import './select-image.scss';
import { GlobalContext } from '@/store/context/global/GlobalContext';

export function SelectImage() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [errorFile, setErrorFile] = useState(false);
    const [errorSizeFile, setErrorSizeFile] = useState(false);
    const { setImageUrl } = useImageSelectStore();
    const { setUrlImageExistent } = useContext(GlobalContext);

    const [isDisabled, setIsDisabled] = useState(true);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        // Validar existencia
        if (!file) return;
        // Validar tamaño máximo de 50MB
        const MAX_SIZE = 50 * 1024 * 1024;
        if (file.size > MAX_SIZE) {
            setErrorSizeFile(true);
            setErrorFile(true);
            event.target.value = ''; // limpia el input
            return;
        }

        setSelectedFile(file);
        setIsDisabled(false);
        event.target.value = ''; // para permitir volver a subir el mismo archivo
        setErrorFile(false);
    };

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
        <FormSelectImage>
            <InputSelectImage
                onChange={handleFileChange}
                filename={selectedFile?.name || ''}
                errorFile={errorFile}
            />
            <PrimaryButton
                textButton="Transform image"
                onClick={handleSubmit}
                disabled={isDisabled}
            />
        </FormSelectImage>
    );
}
