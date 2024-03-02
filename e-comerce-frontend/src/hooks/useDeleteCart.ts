import { cartService } from '@/services/cart.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export const useDeleteCart = () => {
	const client = useQueryClient()

	const { mutate: deleteCartItem } = useMutation({
		mutationKey: ['delet cart item'],
		mutationFn: (id: string) => cartService.delete(id),
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ['cart'] })
			toast.success('Товар успешно удален из корзины!')
		}
	})
	return { deleteCartItem }
}
