import { FolderOpenIcon } from '@heroicons/react/24/outline';
import React from 'react';
import './input-select-image.scss';

interface InputSelectImageProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filename: string;
    errorFile: boolean;
}

export function InputSelectImage({ onChange, filename, errorFile }: InputSelectImageProps) {
    return (
        <div className="input-select-image">
            <div className="input-select-image__title">
                <h2>Transformar imagen</h2>
            </div>
            <div className="drag-drop-relative">
                {
                    <input
                        onChange={onChange}
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        name="image"
                        id="image"
                        className="file-input"
                    />
                }
                <div className="input-drag-drop">
                    <FolderOpenIcon className="input-drag-drop__icon" />
                    <p>Choose your files here</p>
                </div>
                {filename && <p className="p-selected-file">Archivo seleccionado: {filename}</p>}
                {errorFile && (
                    <p className="p-selected-file">
                        El archivo supera las 20 MB, puedes comprimirlo en esta aplicación:
                    </p>
                )}
            </div>
        </div>
    );
}
