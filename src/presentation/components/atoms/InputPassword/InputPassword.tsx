import React from 'react';
import './input-password.scss';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

interface InputPasswordProps {
    label: string;
    name: string;
    value: string;
    placeholder: string;
    seePassword: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setSeePassword: (seePassword: boolean) => void;
}

export function InputPassword({
    label,
    name,
    value,
    placeholder,
    seePassword = false,
    onChange,
    setSeePassword,
}: InputPasswordProps) {
    return (
        <div className="input-password">
            <label htmlFor="input-password">{label}</label>
            <div className="input-password-container">
                <input
                    type={seePassword ? 'text' : 'password'}
                    id="input-password"
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
                {seePassword ? (
                    <button onClick={() => setSeePassword(!seePassword)} className="see-password">
                        <EyeIcon className="see-password__eye-icon" />
                    </button>
                ) : (
                    <button onClick={() => setSeePassword(!seePassword)} className="see-password">
                        <EyeSlashIcon className="see-password__eye-icon" />
                    </button>
                )}
            </div>
        </div>
    );
}
