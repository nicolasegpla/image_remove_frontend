import React from 'react';
import './input-password.scss';

interface InputPasswordProps {
    label: string;
    name: string;
    value: string;
    seePassword: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputPassword({
    label,
    name,
    value,
    seePassword = false,
    onChange,
}: InputPasswordProps) {
    return (
        <div className="input-password">
            <label htmlFor="input-password">{label}</label>
            <input
                type={seePassword ? 'text' : 'password'}
                id="input-password"
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
