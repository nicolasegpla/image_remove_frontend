import { create } from 'zustand';

interface TypeModelStore {
    typeModel: string;
    setTypeModel: (typeModel: string) => void;
}

export const useTypeModelStore = create<TypeModelStore>((set) => ({
    typeModel: 'express',
    setTypeModel: (typeModel) => set({ typeModel }),
}));
