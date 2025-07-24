import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './input-text.scss';
export function InputText({ label, name, value, placeholder, onChange }) {
    return (_jsxs("div", { className: "input-text", children: [_jsx("label", { htmlFor: "input-text", children: label }), _jsx("input", { type: "text", id: "input-text", name: name, value: value, onChange: onChange, placeholder: placeholder })] }));
}
