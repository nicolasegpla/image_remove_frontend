import React from 'react';
import './nav-closer-modals.scss';

interface NavCloserModalsProps {
    children: React.ReactNode;
}

export function NavCloserModals({ children }: NavCloserModalsProps) {
    return <nav className="nav-closer-modals">{children}</nav>;
}
