import React from 'react';
import './container-logo.scss';

interface ContainerLogoProps {
    children: React.ReactNode;
}

export function ContainerLogo({ children }: ContainerLogoProps) {
    return <div className="container-logo">{children}</div>;
}
