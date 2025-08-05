import React, { useEffect } from 'react';
import './layout-transform.scss';
import { useTokenStore } from '@/store/zustand/useTokenstore';

interface LayoutTransformProps {
    children: React.ReactNode;
}

export function LayoutTransform({ children }: LayoutTransformProps) {
    return <div className="layout-transform">{children}</div>;
}
