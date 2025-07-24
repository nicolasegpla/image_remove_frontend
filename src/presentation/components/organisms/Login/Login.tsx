import React, { useState } from 'react';

import { PrimaryButton } from '@/presentation/components/atoms';
import { InputPassword, InputText } from '@/presentation/components/atoms';
import { FormLogin } from '@/presentation/components/molecules';

import './login.scss';
import { Navigate, useNavigate } from 'react-router-dom';
import { useTokenStore } from '@/store/zustand/useTokenstore';
import { XMarkIcon } from '@heroicons/react/24/outline';

export function Login() {
    const navigate = useNavigate();
    const { setToken } = useTokenStore();
    const [session, setSession] = useState({
        username: '',
        password: '',
    });

    const [passwordOrUsernameIsInvalid, setPasswordOrUsernameIsInvalid] = useState(false);

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
            setToken(token);
            navigate('/transform');
        } else {
            setPasswordOrUsernameIsInvalid(true);
        }
    };

    const [seePassword, setSeePassword] = useState(false);

    return (
        <FormLogin>
            {passwordOrUsernameIsInvalid && (
                <div className="password-or-username-is-invalid">
                    <p>Password or username is incorrect</p>
                    <button onClick={() => setPasswordOrUsernameIsInvalid(false)}>
                        <XMarkIcon className="x-mark-icon" />
                    </button>
                </div>
            )}
            <div className="login-title">
                <h1>Welcome back</h1>
                <p>Please enter your details to continue</p>
            </div>
            <InputText
                label="Username"
                name="username"
                value={session.username}
                onChange={handleChange}
                placeholder="Enter your username"
            />
            <InputPassword
                setSeePassword={setSeePassword}
                label="Password"
                name="password"
                value={session.password}
                onChange={handleChange}
                seePassword={seePassword}
                placeholder="Enter your password"
            />
            <div className="forgot-password">
                <span>Forgot password?</span>
            </div>
            <PrimaryButton textButton="Login" onClick={handleSubmit} />
            <div className="register">
                <p>Don't have an account?</p>
                <span>Register</span>
            </div>
        </FormLogin>
    );
}
