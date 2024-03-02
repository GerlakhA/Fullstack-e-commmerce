'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

interface IQueryProvider {
	children: React.ReactNode
}

export const QueryProvider = ({ children }: IQueryProvider) => {
	const [client] = useState(() => new QueryClient())

	return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
