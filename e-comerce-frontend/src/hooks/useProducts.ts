import { productService } from '@/services/product.service'
import { useQuery } from '@tanstack/react-query'

export const useProducts = () => {
	const { data: Products } = useQuery({
		queryKey: ['get-products'],
		queryFn: () => productService.getProducts()
	})
	return { Products }
}
