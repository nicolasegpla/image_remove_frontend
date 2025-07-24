import { jsx as _jsx } from "react/jsx-runtime";
import './primary-button.scss';
export function PrimaryButton({ textButton, onClick, disabled = false, loading = false, }) {
    return (_jsx("button", { onClick: onClick, className: `${disabled ? 'disabled-button' : 'primary-button'} ${loading ? 'loading-button' : ''}`, children: _jsx("p", { children: textButton }) }));
}
