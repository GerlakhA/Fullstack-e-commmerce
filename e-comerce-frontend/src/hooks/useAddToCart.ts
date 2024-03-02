import { cartService } from '@/services/cart.service'
import { IProduct } from '@/types/product.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export const useAddToCart = () => {
	const client = useQueryClient()

	const { mutate: addToCart } = useMutation({
		mutationKey: ['addToCart'],
		mutationFn: (data: IProduct) => cartService.create(data),
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ['cart'] })
			toast.success('Товар добавлен в корзину!')
		}
	})
	return { addToCart }
}
