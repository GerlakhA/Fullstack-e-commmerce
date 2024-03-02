import { userService } from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

export const useUser = () => {
	const { data: getUser } = useQuery({
		queryKey: ['user-profile'],
		queryFn: () => userService.getProfile()
	})
	return { getUser }
}
