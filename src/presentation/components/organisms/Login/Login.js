import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { PrimaryButton } from '@/presentation/components/atoms';
import { InputPassword, InputText } from '@/presentation/components/atoms';
import { FormLogin } from '@/presentation/components/molecules';
import './login.scss';
import { useNavigate } from 'react-router-dom';
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
    const handleChange = (e) => {
        setSession({ ...session, [e.target.name]: e.target.value });
    };
    class Username {
        username;
        password;
        constructor(username, password) {
            this.username = username;
            this.password = password;
            this.username = username;
            this.password = password;
        }
        validate() {
            const username = listUsernames.find((username) => username.username === session.username);
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
        }
        else {
            setPasswordOrUsernameIsInvalid(true);
        }
    };
    const [seePassword, setSeePassword] = useState(false);
    return (_jsxs(FormLogin, { children: [passwordOrUsernameIsInvalid && (_jsxs("div", { className: "password-or-username-is-invalid", children: [_jsx("p", { children: "Password or username is incorrect" }), _jsx("button", { onClick: () => setPasswordOrUsernameIsInvalid(false), children: _jsx(XMarkIcon, { className: "x-mark-icon" }) })] })), _jsxs("div", { className: "login-title", children: [_jsx("h1", { children: "Welcome back" }), _jsx("p", { children: "Please enter your details to continue" })] }), _jsx(InputText, { label: "Username", name: "username", value: session.username, onChange: handleChange, placeholder: "Enter your username" }), _jsx(InputPassword, { setSeePassword: setSeePassword, label: "Password", name: "password", value: session.password, onChange: handleChange, seePassword: seePassword, placeholder: "Enter your password" }), _jsx("div", { className: "forgot-password", children: _jsx("span", { children: "Forgot password?" }) }), _jsx(PrimaryButton, { textButton: "Login", onClick: handleSubmit }), _jsxs("div", { className: "register", children: [_jsx("p", { children: "Don't have an account?" }), _jsx("span", { children: "Register" })] })] }));
}
