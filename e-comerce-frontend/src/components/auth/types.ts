import { z } from 'zod'

export const AuthSchema = z.object({
	name: z.string().optional(),
	email: z
		.string({
			required_error: 'Email is required!'
		})
		.email(),
	password: z
		.string({
			required_error: 'Password is required!'
		})
		.min(6)
})
