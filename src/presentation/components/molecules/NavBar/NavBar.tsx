import React from 'react';
import './nav-bar.scss';

interface NavBarProps {
    children: React.ReactNode;
}

export function NavBar({ children }: NavBarProps) {
    return <div className="nav-bar">{children}</div>;
}
