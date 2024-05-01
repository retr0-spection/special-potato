import { create } from 'zustand'

const useStore = create((set) => ({
  profile: null,
  cart: [],
  setProfile: (payload) => set((state) => ({ profile: payload  })),
  addToCart: (payload) => set((state) => ({cart: [...state.cart, payload]})),
  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(item => item.id !== productId)
  })),

  
  

}))

export default useStore