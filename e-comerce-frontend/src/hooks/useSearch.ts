import { productService } from '@/services/product.service'
import { useQuery } from '@tanstack/react-query'

export const useSearch = (name: string) => {
	const { data: SearchProduct } = useQuery({
		queryKey: ['search-product', name],
		queryFn: () => productService.getByTitle(name)
	})
	return { SearchProduct }
}
