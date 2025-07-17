import { create } from 'zustand';

interface TokenStore {
    token: boolean;
    setToken: (token: boolean) => void;
}

export const useTokenStore = create<TokenStore>((set) => ({
    token: false,
    setToken: (token) => set({ token }),
}));
