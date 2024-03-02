import { authService } from '@/services/auth.service'
import { IAuthForm } from '@/types/auth.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export const useRegister = () => {
	const { reset } = useForm()
	const router = useRouter()
	const client = useQueryClient()

	const { mutate: Register } = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: IAuthForm) => authService.main('register', data),
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ['user-profile'] })
			toast.success('Successfully register account!')
			reset()
			router.push('/')
		}
	})
	return { Register }
}
