import { cartService } from '@/services/cart.service'
import { useQuery } from '@tanstack/react-query'

export const useCartCount = () => {
	const { data: cartCount } = useQuery({
		queryKey: ['cart-count'],
		queryFn: () => cartService.getCount()
	})
	return { cartCount }
}
