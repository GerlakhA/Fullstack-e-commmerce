import { cartService } from '@/services/cart.service'
import { ICartResponse } from '@/types/cart.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateCart = (id: string) => {
	const client = useQueryClient()

	const { mutate: updateCart } = useMutation({
		mutationKey: ['update cart', id],
		mutationFn: (data: Partial<ICartResponse>) => cartService.update(data),
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ['cart'] })
		}
	})
	return { updateCart }
}
