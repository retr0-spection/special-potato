<<<<<<< HEAD
import { create } from 'zustand';

const useStore = create((set, get) => ({
=======
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useStore = create(persist((set) => ({
>>>>>>> main
  profile: null,
  cart: [],
  setProfile: (payload) => set((state) => ({ profile: payload })),
  addToCart: (payload) => set((state) => ({ cart: [...state.cart, payload] })),
  removeFromCart: (productId) => {
    const state = get();
    const index = state.cart.findIndex(item => item.id === productId);
    
    if (index !== -1) {
      set((state) => ({
        cart: [
          ...state.cart.slice(0, index),
          ...state.cart.slice(index + 1)
        ]
      }));
    }
  },
}));

<<<<<<< HEAD
export default useStore;
=======
}),{
  name: 'sys-storage',
  // storage: createJSONStorage(() => sessionStorage())
}))

export default useStore
>>>>>>> main
