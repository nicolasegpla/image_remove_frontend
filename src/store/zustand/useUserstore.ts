// useTokenStore.ts
import { create } from 'zustand';

type User = {
    id: string;
    email: string;
    id_api: string;
    status: boolean;
    tokens: number;
    type_user: string;
    country: string | null;
};

interface UserState {
    user: User | null;
    setUser: (user: User | null) => void;
    isAuthenticated: boolean;
}

export const useUserstore = create<UserState>((set) => ({
    user: sessionStorage.getItem('session')
        ? JSON.parse(sessionStorage.getItem('session')!).user
        : null,
    isAuthenticated: !!sessionStorage.getItem('session'),
    setUser: (user) => {
        if (user) {
            sessionStorage.setItem('session', JSON.stringify({ user }));
        } else {
            sessionStorage.removeItem('session');
        }
        set({ user, isAuthenticated: !!user });
    },
}));
