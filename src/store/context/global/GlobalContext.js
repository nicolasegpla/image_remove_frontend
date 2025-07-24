import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from 'react';
const GlobalContext = createContext({
    urlImageExistent: false,
    setUrlImageExistent: () => { },
    selectedFile: null,
    setSelectedFile: () => { },
    imageUrlOriginal: null,
    setImageUrlOriginal: () => { },
});
const GlobalContextProvider = ({ children }) => {
    const [urlImageExistent, setUrlImageExistent] = useState(true);
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrlOriginal, setImageUrlOriginal] = useState(null);
    return (_jsx(GlobalContext.Provider, { value: {
            urlImageExistent,
            setUrlImageExistent,
            selectedFile,
            setSelectedFile,
            imageUrlOriginal,
            setImageUrlOriginal,
        }, children: children }));
};
export { GlobalContext, GlobalContextProvider };
