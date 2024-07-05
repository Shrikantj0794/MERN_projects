import { create } from 'zustand'

interface StoreState {
  loggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
}

export const useStore = create<StoreState>((set) => ({
  loggedIn: false,
  logIn: () => set({ loggedIn: true }),
  logOut: () => set({ loggedIn: false })
}));