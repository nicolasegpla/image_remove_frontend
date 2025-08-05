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
    user: sessionStorage.getItem('session-user')
        ? JSON.parse(sessionStorage.getItem('session-user')!).user
        : null,
    isAuthenticated: !!sessionStorage.getItem('session-user'),
    setUser: (user) => {
        if (user) {
            sessionStorage.setItem('session-user', JSON.stringify({ user }));
        } else {
            sessionStorage.removeItem('session-user');
        }
        set({ user, isAuthenticated: !!user });
    },
}));
