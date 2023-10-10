import { create } from 'zustand'

interface ToggleState {
    showToggle: boolean
    switchToggle: () => void
}
export const useToggle = create<ToggleState>()((set) => ({
    showToggle: false,
    switchToggle: () => set((state) => ({ showToggle: !state.showToggle })),
}))

