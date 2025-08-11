import React from 'react';
import './layout-edit-image.scss';

interface LayoutEditImageProps {
    children: React.ReactNode;
}

export function LayoutEditImage({ children }: LayoutEditImageProps) {
    return <div className="layout-edit-image">{children}</div>;
}
