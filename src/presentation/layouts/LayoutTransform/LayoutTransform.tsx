import React, { useEffect } from 'react';
import './layout-transform.scss';
import { useTokenStore } from '@/store/zustand/useTokenstore';

interface LayoutTransformProps {
    children: React.ReactNode;
}

export function LayoutTransform({ children }: LayoutTransformProps) {
    const hydrate = useTokenStore((state) => state.hydrate);

    useEffect(() => {
        hydrate(); // Esto asegura que al recargar se vuelva a leer el token
    }, []);
    return <div className="layout-transform">{children}</div>;
}
