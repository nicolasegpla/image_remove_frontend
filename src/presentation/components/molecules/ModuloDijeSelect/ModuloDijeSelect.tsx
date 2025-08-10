import React from 'react';
import './modulo-dije-select.scss';

interface ModuloDijeSelectProps {
    children: React.ReactNode;
}

export function ModuloDijeSelect({ children }: ModuloDijeSelectProps) {
    return <div className="modulo-dije-select">{children}</div>;
}
