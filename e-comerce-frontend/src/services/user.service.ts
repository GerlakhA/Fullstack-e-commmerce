import { axiosWithAuth } from '@/api/interceptors'
import { IUser } from '@/types/auth.types'

export const userService = {
	async getProfile() {
		const response = await axiosWithAuth.get<IUser>('/user/profile')
		return response.data
	},

	async update(data: IUser) {
		const response = await axiosWithAuth.put<IUser>('/user/profile', data)
		return response.data
	}
}
