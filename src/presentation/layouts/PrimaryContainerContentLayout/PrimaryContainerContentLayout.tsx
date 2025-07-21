import React from 'react';
import './primary-container-content-layout.scss';

interface PrimaryContainerContentLayoutProps {
    children: React.ReactNode;
}

export function PrimaryContainerContentLayout({ children }: PrimaryContainerContentLayoutProps) {
    return <div className="primary-container-content-layout">{children}</div>;
}
