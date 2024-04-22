import { create } from 'zustand'

const useStore = create((set) => ({
  profile: null,
  setProfile: (payload) => set((state) => ({ profile: payload  })),
}))

export default useStore