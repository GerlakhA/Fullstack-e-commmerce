import { axiosWithAuth } from '@/api/interceptors'
import { ICartResponse } from '@/types/cart.types'
import { IProduct } from '@/types/product.types'

export const cartService = {
	async getAll() {
		let response = await axiosWithAuth.get<ICartResponse[]>('/cart')
		return response.data
	},

	async create(data: Omit<IProduct, 'id'>) {
		return await axiosWithAuth.post('/cart', data)
	},

	async update(data: Partial<IProduct>) {
		return await axiosWithAuth.put('/cart', data)
	},

	async delete(id: string) {
		let res = await axiosWithAuth.delete(`/cart/${id}`)
		return res.data
	}
}
