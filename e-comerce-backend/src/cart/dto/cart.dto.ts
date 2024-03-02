import { IsNumber, IsString } from 'class-validator'

export class CartDto {
	@IsString()
	id: string

	@IsNumber()
	count: number

	@IsString()
	name: string

	@IsString()
	description: string

	@IsString()
	imgUrl: string

	@IsNumber()
	price: number
}
