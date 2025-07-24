import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FolderOpenIcon } from '@heroicons/react/24/outline';
import './input-select-image.scss';
export function InputSelectImage({ onChange, filename, errorFile, handleClick, }) {
    return (_jsx("div", { className: "input-select-image", children: _jsxs("div", { className: "drag-drop-relative", children: [_jsx("input", { onClick: handleClick ? handleClick : () => { }, onChange: onChange, type: "file", accept: ".jpg, .jpeg", name: "image", id: "image", className: "file-input" }), _jsxs("div", { className: "input-drag-drop", children: [_jsx(FolderOpenIcon, { className: "input-drag-drop__icon" }), _jsxs("p", { children: ["Choose your files here or drag and drop,", ' ', filename && _jsxs("span", { children: ["Archivo seleccionado: ", filename] })] })] }), errorFile && (_jsx("p", { className: "p-selected-file", children: "El archivo supera las 20 MB, puedes comprimirlo en esta aplicacio\u0301n:" }))] }) }));
}
