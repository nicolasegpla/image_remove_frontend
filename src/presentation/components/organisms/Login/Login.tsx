import React, { useState } from 'react';

import { LogoImage, PrimaryButton } from '@/presentation/components/atoms';
import { InputPassword, InputText } from '@/presentation/components/atoms';
import { FormLogin } from '@/presentation/components/molecules';

import './login.scss';
import { Navigate, useNavigate } from 'react-router-dom';

import { useTokenStore } from '@/store/zustand/useTokenstore';
import { useUserstore } from '@/store/zustand/useUserstore';

import { XMarkIcon } from '@heroicons/react/24/outline';

import { usePost } from '@/presentation/viewmodels/customhooks/usePost';

export function Login() {
    const navigate = useNavigate();
    const { setToken } = useTokenStore();
    const { setUser } = useUserstore();
    const [session, setSession] = useState({
        email: '',
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
            const username = listUsernames.find((username) => username.username === session.email);
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

    const [seePassword, setSeePassword] = useState(false);

    const { dataRes, error, loading, executePost } = usePost();

    function handleLogin() {
        const url = 'https://buildtix.store/auth/login'; // Replace with your actual URL
        executePost(url, session)
            .then((response) => {
                console.log('Login successful:', response);
                sessionStorage.setItem('session', JSON.stringify({ token: response.access_token }));
                setToken(response.access_token); // Assuming the response contains a token
                setUser(response.user); // Assuming the response contains user info
                navigate('/transform');
            })
            .catch((err) => {
                console.error('Login failed:', err);
                setPasswordOrUsernameIsInvalid(true);
            });
    }

    return (
        <FormLogin>
            <LogoImage />
            {passwordOrUsernameIsInvalid && (
                <div className="password-or-username-is-invalid">
                    <p>Password or username is incorrect</p>
                    <button onClick={() => setPasswordOrUsernameIsInvalid(false)}>
                        <XMarkIcon className="x-mark-icon" />
                    </button>
                </div>
            )}
            <div className="login-title">
                <h2>Welcome back</h2>
                <p>Please enter your details to continue</p>
            </div>
            <InputText
                label="Email"
                name="email"
                value={session.email}
                onChange={handleChange}
                placeholder="Enter your email"
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
            <PrimaryButton textButton="Login" onClick={handleLogin} />
            <div className="register">
                <p>Don't have an account?</p>
                <span>Register</span>
            </div>
        </FormLogin>
    );
}
