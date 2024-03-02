import { create } from 'zustand'

interface IUseSidebar {
	onOpen: () => void
	onClose: () => void
	state: boolean
}

export const useSidebar = create<IUseSidebar>(set => ({
	state: false,
	onOpen: () => set(() => ({ state: true })),
	onClose: () => set(() => ({ state: false }))
}))
