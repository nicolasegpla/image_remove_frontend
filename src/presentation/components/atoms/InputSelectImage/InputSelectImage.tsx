import { FolderOpenIcon, PhoneIcon, PhotoIcon } from '@heroicons/react/24/outline';
import React from 'react';
import './input-select-image.scss';

interface InputSelectImageProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filename: string;
    errorFile: boolean;
    handleClick?: () => void;
}

export function InputSelectImage({
    onChange,
    filename,
    errorFile,
    handleClick,
}: InputSelectImageProps) {
    return (
        <div className="input-select-image">
            {/*<div className="input-select-image__title">
                <h2>Upload your image</h2>
                <p>File should be an image (png, jpg, jpeg) to transform.</p>
            </div>*/}
            <div className="drag-drop-relative">
                {
                    <input
                        onClick={handleClick ? handleClick : () => {}}
                        onChange={onChange}
                        type="file"
                        accept=".jpg, .jpeg"
                        name="image"
                        id="image"
                        className="file-input"
                    />
                }
                <div className="input-drag-drop">
                    <FolderOpenIcon className="input-drag-drop__icon" />
                    <p>
                        {/*Choose your files here or drag and drop,{' '}
                        {filename && <span>Archivo seleccionado: {filename}</span>}}*/}
                        {/*Choose your files here or drag and drop*/}
                        <PhotoIcon className="input-drag-drop__icon" />
                    </p>
                </div>
                {errorFile && (
                    <p className="p-selected-file">
                        El archivo supera las 20 MB, puedes comprimirlo en esta aplicación:
                    </p>
                )}
            </div>
        </div>
    );
}
