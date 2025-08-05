import React, { useEffect } from 'react';
import './layout-admin.scss';
import { useTokenStore } from '@/store/zustand/useTokenstore';

interface LayoutAdminProps {
    children: React.ReactNode;
}

export function LayoutAdmin({ children }: LayoutAdminProps) {
    const hydrate = useTokenStore((state) => state.hydrate);

    useEffect(() => {
        hydrate(); // Esto asegura que al recargar se vuelva a leer el token
    }, []);
    return <div className="layout-admin">{children}</div>;
}
