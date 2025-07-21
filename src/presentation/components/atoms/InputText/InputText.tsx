import React from 'react';
import './input-text.scss';

interface InputTextProps {
    label: string;
    name: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputText({ label, name, value, placeholder, onChange }: InputTextProps) {
    return (
        <div className="input-text">
            <label htmlFor="input-text">{label}</label>
            <input
                type="text"
                id="input-text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}
