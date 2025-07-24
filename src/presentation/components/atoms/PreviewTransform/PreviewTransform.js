import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './preview-transform.scss';
export function PreviewTransform({ urlImage, text }) {
    return (_jsxs("div", { className: "preview-transform", children: [urlImage && _jsx("img", { src: urlImage, alt: "Preview", className: "preview-transform__image" }), !urlImage && _jsx("p", { children: text ? text : 'No image to show, please transform an image.' })] }));
}
