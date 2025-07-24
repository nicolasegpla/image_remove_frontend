import { jsx as _jsx } from "react/jsx-runtime";
import './button-log-out.scss';
export function ButtonLogOut({ onClick }) {
    return (_jsx("button", { onClick: onClick, className: "button-log-out", children: _jsx("p", { children: "Log out" }) }));
}
