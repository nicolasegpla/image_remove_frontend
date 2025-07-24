import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './input-password.scss';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
export function InputPassword({ label, name, value, placeholder, seePassword = false, onChange, setSeePassword, }) {
    return (_jsxs("div", { className: "input-password", children: [_jsx("label", { htmlFor: "input-password", children: label }), _jsxs("div", { className: "input-password-container", children: [_jsx("input", { type: seePassword ? 'text' : 'password', id: "input-password", name: name, value: value, onChange: onChange, placeholder: placeholder }), seePassword ? (_jsx("button", { onClick: () => setSeePassword(!seePassword), className: "see-password", children: _jsx(EyeIcon, { className: "see-password__eye-icon" }) })) : (_jsx("button", { onClick: () => setSeePassword(!seePassword), className: "see-password", children: _jsx(EyeSlashIcon, { className: "see-password__eye-icon" }) }))] })] }));
}
