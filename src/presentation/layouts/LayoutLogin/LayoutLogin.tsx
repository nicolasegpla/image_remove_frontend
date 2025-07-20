import React from 'react';
import './layout-login.scss';

interface LayoutLoginProps {
    children: React.ReactNode;
}

export function LayoutLogin({ children }: LayoutLoginProps) {
    return <div className="layout-login">{children}</div>;
}
