import React from 'react';
import './form-login.scss';

interface FormLoginProps {
    children: React.ReactNode;
}

export function FormLogin({ children }: FormLoginProps) {
    return <div className="form-login">{children}</div>;
}
