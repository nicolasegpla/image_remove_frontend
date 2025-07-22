import React from 'react';
import './form-preview.scss';

interface FormPreviewProps {
    children: React.ReactNode;
}

export function FormPreview({ children }: FormPreviewProps) {
    return <div className="form-preview">{children}</div>;
}
