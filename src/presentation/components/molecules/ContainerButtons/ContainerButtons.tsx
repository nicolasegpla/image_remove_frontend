import React from 'react';
import './container-buttons.scss';

interface ContainerButtonsProps {
    children: React.ReactNode;
}

export function ContainerButtons({ children }: ContainerButtonsProps) {
    return <div className="container-buttons">{children}</div>;
}
