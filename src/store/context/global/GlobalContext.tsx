import React, { createContext, useState } from 'react';

interface GlobalContextProps {
    urlImageExistent: boolean;
    setUrlImageExistent: (value: boolean) => void;
}

const GlobalContext = createContext<GlobalContextProps>({
    urlImageExistent: false,
    setUrlImageExistent: () => {},
});

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [urlImageExistent, setUrlImageExistent] = useState<boolean>(true);

    return (
        <GlobalContext.Provider value={{ urlImageExistent, setUrlImageExistent }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalContextProvider };
