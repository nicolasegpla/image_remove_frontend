import React from 'react';
import './button-mini.scss';

interface ButtonMiniProps {
    children: React.ReactNode;
    onClick: () => void;
}

export function ButtonMini({ children, onClick }: ButtonMiniProps) {
    return (
        <button className="button-mini" onClick={onClick}>
            {children}
        </button>
    );
}
