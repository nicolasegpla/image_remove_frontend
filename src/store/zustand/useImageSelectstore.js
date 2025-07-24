import { create } from 'zustand';
export const useImageSelectStore = create((set) => ({
    imageUrl: '',
    setImageUrl: (imageUrl) => set({ imageUrl }),
}));
