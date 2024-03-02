'use client'

import { useUser } from '@/hooks/useUser'
import { cn } from '@/lib/utils'
import { useSidebar } from '@/zustand/useSidebar'

export const UserProfile = () => {
	const { state } = useSidebar()
	const { getUser } = useUser()

	return (
		<div
			className={cn(
				'border p-2 w-full rounded-lg bg-pink-200/20 text-center',
				state && 'hidden'
			)}
		>
			<p className='text-xl font-semibold'>{getUser?.name}</p>
			<p className='text-xs text-muted-foreground'>{getUser?.email}</p>
		</div>
	)
}
