import React, { useContext, useState } from 'react';

import { FormSelectImage } from '@/presentation/components/molecules';
import { InputSelectImage, PrimaryButton } from '@/presentation/components/atoms';
import { useImageSelectStore } from '@/store/zustand/useImageSelectstore';

import './select-image.scss';
import { GlobalContext } from '@/store/context/global/GlobalContext';

export function SelectImage() {
    const { selectedFile, setSelectedFile, setImageUrlOriginal } = useContext(GlobalContext);
    const [errorFile, setErrorFile] = useState(false);
    const [errorSizeFile, setErrorSizeFile] = useState(false);
    const { setImageUrl } = useImageSelectStore();
    const { setUrlImageExistent } = useContext(GlobalContext);

    const [isDisabled, setIsDisabled] = useState(true);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImageUrlOriginal(null);
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

    const handleClick = () => {
        console.log('handleClick');
        setImageUrlOriginal(null);
        setUrlImageExistent(true);
        setImageUrl('');
    };

    return (
        <FormSelectImage>
            <InputSelectImage
                handleClick={handleClick}
                onChange={handleFileChange}
                filename={selectedFile?.name || ''}
                errorFile={errorFile}
            />
            {/*<PrimaryButton
                textButton="Transform image"
                onClick={handleSubmit}
                disabled={isDisabled}
            />*/}
        </FormSelectImage>
    );
}
