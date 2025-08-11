import React from 'react';
import './container-image-editor.scss';

interface ContainerImageEditorProps {
    children: React.ReactNode;
}

export function ContainerImageEditor({ children }: ContainerImageEditorProps) {
    return <div className="container-image-editor">{children}</div>;
}
