import React, { createContext, useState } from 'react';

interface GlobalContextProps {
    urlImageExistent: boolean;
    setUrlImageExistent: (value: boolean) => void;
    selectedFile: File | null;
    setSelectedFile: (value: File | null) => void;
    imageUrlOriginal: string | null;
    setImageUrlOriginal: (value: string | null) => void;
    modal: boolean;
    setModal: (value: boolean) => void;
    collapsibleMenu: boolean;
    setCollapsibleMenu: (value: boolean) => void;
}

const GlobalContext = createContext<GlobalContextProps>({
    urlImageExistent: false,
    setUrlImageExistent: () => {},
    selectedFile: null,
    setSelectedFile: () => {},
    imageUrlOriginal: null,
    setImageUrlOriginal: () => {},
    modal: false,
    setModal: () => {},
    collapsibleMenu: false,
    setCollapsibleMenu: () => {},
});

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [urlImageExistent, setUrlImageExistent] = useState<boolean>(true);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [imageUrlOriginal, setImageUrlOriginal] = useState<string | null>(null);
    const [modal, setModal] = useState<boolean>(false);
    const [collapsibleMenu, setCollapsibleMenu] = useState<boolean>(false);

    return (
        <GlobalContext.Provider
            value={{
                urlImageExistent,
                setUrlImageExistent,
                selectedFile,
                setSelectedFile,
                imageUrlOriginal,
                setImageUrlOriginal,
                modal,
                setModal,
                collapsibleMenu,
                setCollapsibleMenu,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalContextProvider };
