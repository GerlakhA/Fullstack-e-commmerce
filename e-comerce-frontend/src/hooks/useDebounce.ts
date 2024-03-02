import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, delay?: number): T => {
	const [debouncedValue, setDebouncedValue] = useState(value)

	useEffect(() => {
		let timeout = setTimeout(() => {
			setDebouncedValue(value)
		}, delay ?? 500)
		return () => {
			clearTimeout(timeout)
		}
	}, [value, delay])

	return debouncedValue
}
