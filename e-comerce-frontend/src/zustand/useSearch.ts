import { useState } from 'react'
import { create } from 'zustand'

// interface ISearch {
// 	value: string
// 	setValue: (value: string) => void
// 	// newValue: string
// }

const [value, setValue] = useState('')
export const useSearch = create(set => ({
	value: '',
	// newValue: '',
	setValue: (e: any) => set(() => e.target?.value)
}))
