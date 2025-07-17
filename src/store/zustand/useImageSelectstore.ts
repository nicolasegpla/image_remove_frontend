import { create } from 'zustand';

interface ImageSelectStore {
    imageUrl: string;
    setImageUrl: (imageUrl: string) => void;
}

export const useImageSelectStore = create<ImageSelectStore>((set) => ({
    imageUrl: '',
    setImageUrl: (imageUrl) => set({ imageUrl }),
}));
