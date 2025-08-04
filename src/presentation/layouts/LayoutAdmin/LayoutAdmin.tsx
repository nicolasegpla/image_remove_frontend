import React from 'react';
import './layout-admin.scss';

interface LayoutAdminProps {
    children: React.ReactNode;
}

export function LayoutAdmin({ children }: LayoutAdminProps) {
    return <div className="layout-admin">{children}</div>;
}
