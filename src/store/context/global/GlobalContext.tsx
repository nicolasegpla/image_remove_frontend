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
    openSelectDije: boolean;
    setOpenSelectDije: (value: boolean) => void;
    openSelectUserFromAdmin: boolean;
    setOpenSelectUserFromAdmin: (value: boolean) => void;
    openSelectModel: boolean;
    setOpenSelectModel: (value: boolean) => void;
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
    openSelectDije: false,
    setOpenSelectDije: () => {},
    openSelectUserFromAdmin: false,
    setOpenSelectUserFromAdmin: () => {},
    openSelectModel: false,
    setOpenSelectModel: () => {},
});

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [urlImageExistent, setUrlImageExistent] = useState<boolean>(true);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [imageUrlOriginal, setImageUrlOriginal] = useState<string | null>(null);
    const [modal, setModal] = useState<boolean>(false);
    const [collapsibleMenu, setCollapsibleMenu] = useState<boolean>(false);
    const [openSelectDije, setOpenSelectDije] = useState<boolean>(false);
    const [openSelectUserFromAdmin, setOpenSelectUserFromAdmin] = useState<boolean>(false);
    const [openSelectModel, setOpenSelectModel] = useState<boolean>(false);

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
                openSelectDije,
                setOpenSelectDije,
                openSelectUserFromAdmin,
                setOpenSelectUserFromAdmin,
                openSelectModel,
                setOpenSelectModel,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalContextProvider };
