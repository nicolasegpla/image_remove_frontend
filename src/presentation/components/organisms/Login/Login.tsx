import React, { useState } from 'react';

import { PrimaryButton } from '@/presentation/components/atoms';
import { InputPassword, InputText } from '@/presentation/components/atoms';
import { FormLogin } from '@/presentation/components/molecules';

import './login.scss';
import { Navigate, useNavigate } from 'react-router-dom';
import { useTokenStore } from '@/store/zustand/useTokenstore';

export function Login() {
    const navigate = useNavigate();
    const { setToken } = useTokenStore();
    const [session, setSession] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSession({ ...session, [e.target.name]: e.target.value });
    };

    class Username {
        constructor(
            public username: string,
            public password: string
        ) {
            this.username = username;
            this.password = password;
        }

        validate() {
            const username = listUsernames.find(
                (username) => username.username === session.username
            );
            if (username) {
                return username.password === session.password;
            }
        }
    }

    const listUsernames = [
        new Username('nicolas', 'admin123'),
        new Username('camilo', 'admin456'),
        new Username('juan', 'admin789'),
    ];

    const token = '1234567890';

    const handleSubmit = () => {
        const username = new Username(session.username, session.password);
        if (username.validate()) {
            sessionStorage.setItem('session', JSON.stringify({ token }));
            setToken(true);
            navigate('/transform');
        } else {
            alert('Contraseña incorrecta');
        }
    };

    return (
        <FormLogin>
            <h1>Login</h1>
            <p>Ingrese su email y contraseña para iniciar sesión</p>
            <InputText
                label="Usuario"
                name="username"
                value={session.username}
                onChange={handleChange}
            />
            <InputPassword
                label="Contraseña"
                name="password"
                value={session.password}
                onChange={handleChange}
                seePassword={false}
            />
            <PrimaryButton textButton="Iniciar sesión" onClick={handleSubmit} />
        </FormLogin>
    );
}
