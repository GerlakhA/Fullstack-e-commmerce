import { authService } from '@/services/auth.service'
import { IAuthForm } from '@/types/auth.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export const useLogin = () => {
	const { reset } = useForm()
	const router = useRouter()
	const client = useQueryClient()

	const { mutate: Login } = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: IAuthForm) => authService.main('login', data),
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ['user-profile'] })
			toast.success('Successfully login!')
			reset()
			router.push('/')
		},
		onError: () => toast.error('User dont exist')
	})
	return { Login }
}
