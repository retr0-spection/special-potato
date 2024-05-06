import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useStore = create(persist((set) => ({
  profile: null,
  cart: [],
  setProfile: (payload) => set((state) => ({ profile: payload  })),
  addToCart: (payload) => set((state) => ({cart: [...state.cart, payload]})),

}),{
  name: 'sys-storage',
  // storage: createJSONStorage(() => sessionStorage())
}))

export default useStore