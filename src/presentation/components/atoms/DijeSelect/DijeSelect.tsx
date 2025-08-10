import React from 'react';
import './dije-select.scss';

interface DijeSelectProps {
    children?: React.ReactNode;
    onClick?: () => void;
}

export function DijeSelect({ children, onClick }: DijeSelectProps) {
    return (
        <button onClick={onClick} className="dije-select">
            {children}
        </button>
    );
}
