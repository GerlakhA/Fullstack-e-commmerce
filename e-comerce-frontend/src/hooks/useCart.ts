import { cartService } from '@/services/cart.service'
import { useQuery } from '@tanstack/react-query'

export const useCart = () => {
	const { data: getCart } = useQuery({
		queryKey: ['cart'],
		queryFn: () => cartService.getAll()
	})
	return { getCart }
}
