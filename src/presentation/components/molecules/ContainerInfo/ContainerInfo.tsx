import React from 'react';
import './container-info.scss';

interface ContainerInfoProps {
    children: React.ReactNode;
}

export function ContainerInfo({ children }: ContainerInfoProps) {
    return <div className="container-info">{children}</div>;
}
