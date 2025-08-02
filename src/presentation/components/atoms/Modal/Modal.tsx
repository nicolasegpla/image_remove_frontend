import React from 'react';
import { createPortal } from 'react-dom';
import './modal.scss';

interface ModalProps {
    children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
    return createPortal(
        <div className="modal" style={{ display: children ? 'flex' : 'none' }}>
            {children}
        </div>,
        document.getElementById('modal') as Element
    );
}
