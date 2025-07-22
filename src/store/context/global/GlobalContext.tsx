import React, { createContext, useState } from 'react';

interface GlobalContextProps {
    urlImageExistent: boolean;
    setUrlImageExistent: (value: boolean) => void;
    selectedFile: File | null;
    setSelectedFile: (value: File | null) => void;
    imageUrlOriginal: string | null;
    setImageUrlOriginal: (value: string | null) => void;
}

const GlobalContext = createContext<GlobalContextProps>({
    urlImageExistent: false,
    setUrlImageExistent: () => {},
    selectedFile: null,
    setSelectedFile: () => {},
    imageUrlOriginal: null,
    setImageUrlOriginal: () => {},
});

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [urlImageExistent, setUrlImageExistent] = useState<boolean>(true);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [imageUrlOriginal, setImageUrlOriginal] = useState<string | null>(null);

    return (
        <GlobalContext.Provider
            value={{
                urlImageExistent,
                setUrlImageExistent,
                selectedFile,
                setSelectedFile,
                imageUrlOriginal,
                setImageUrlOriginal,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalContextProvider };
