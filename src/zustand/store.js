import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useStore = create(persist((set, get) => ({
  profile: null,
  cart: [],
  setProfile: (payload) => set((state) => ({ profile: payload })),
  addToCart: (payload) => set((state) => ({ cart: [...state.cart, payload] })),
  emptyCart: (payload) => set((state) => ({ cart: [] })),
  // alterCartItemQuantity: (productId, quantity) => {
  //   const state = get();
  //   const payload = {cart:[...state.cart]}
  //   const index = state.cart.findIndex(item => item.product.id === productId);
  //   payload.cart[index] = {...payload.cart[index], quantity}
  //   set((state) => { cart: payload.cart })
  // },

  removeFromCart: (productId) => {
    const state = get();
    const index = state.cart.findIndex(item => item.product.id === productId);
    
    if (index !== -1) {
      set((state) => ({
        cart: [
          ...state.cart.slice(0, index),
          ...state.cart.slice(index + 1)
        ]
      }));
    }
  },
}),{
  name: 'sys-storage',
  // storage: createJSONStorage(() => sessionStorage())
}))

export default useStore
