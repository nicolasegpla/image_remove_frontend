import React from 'react';
import './layout-transform.scss';

interface LayoutTransformProps {
    children: React.ReactNode;
}

export function LayoutTransform({ children }: LayoutTransformProps) {
    return <div className="layout-transform">{children}</div>;
}
