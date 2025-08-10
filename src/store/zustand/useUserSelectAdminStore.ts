import { create } from 'zustand';

interface User {
    id: string;
    email: string;
    id_api: string;
    status: boolean;
    tokens: number;
    type_user: string;
    country: string;
}

interface UserStore {
    user: Readonly<User> | null;
    setUser: (user: User) => void;
    clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user) => set(() => ({ user })), // asignación directa
    clearUser: () => set(() => ({ user: null })),
}));
