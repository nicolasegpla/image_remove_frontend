import { create } from 'zustand';

interface TokenState {
    token: string | null;
    isAuthenticated: boolean;
    setToken: (token: string | null) => void;
    hydrate: () => void;
}

export const useTokenStore = create<TokenState>((set) => ({
    token: null,
    isAuthenticated: false,

    setToken: (token: string | null) => {
        if (token) {
            sessionStorage.setItem('session', JSON.stringify({ token }));
        } else {
            sessionStorage.removeItem('session');
        }
        set({ token, isAuthenticated: !!token });
    },

    hydrate: () => {
        const session = sessionStorage.getItem('session');
        if (session) {
            const parsed = JSON.parse(session);
            set({
                token: parsed.token,
                isAuthenticated: !!parsed.token,
            });
        }
    },
}));
