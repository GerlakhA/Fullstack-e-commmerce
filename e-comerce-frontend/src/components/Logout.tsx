'use client'

import { authService } from '@/services/auth.service'
import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Hint } from './Hint'

export const Logout = () => {
	const router = useRouter()

	const { mutate: Logout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push('/auth/login')
	})

	return (
		<>
			<Hint side='right' label='Выйти?'>
				<LogOut
					onClick={() => Logout()}
					className='w-10 h-10 text-black opacity-40 hover:opacity-100 transition-opacity'
				/>
			</Hint>
		</>
	)
}
