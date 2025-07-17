import React from 'react';
import './form-select-image.scss';

interface FormSelectImageProps {
    children: React.ReactNode;
}

export function FormSelectImage({ children }: FormSelectImageProps) {
    return <div className="form-select-image">{children}</div>;
}
