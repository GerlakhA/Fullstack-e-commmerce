import { axiosWithAuth } from '@/api/interceptors'
import { IProduct } from '@/types/product.types'

export const productService = {
	async getProducts() {
		let response = await axiosWithAuth.get<IProduct[]>('/product')
		return response.data
	},

	async getByTitle(name: string) {
		let response = await axiosWithAuth.get<IProduct>(`/product`)
		return response.data
	}
}
