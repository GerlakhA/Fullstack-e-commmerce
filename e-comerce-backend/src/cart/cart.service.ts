import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CartDto } from './dto/cart.dto'

@Injectable()
export class CartService {
	constructor(private prisma: PrismaService) {}

	async getAll(id: string) {
		return this.prisma.cart.findMany({
			where: { id }
		})
	}

	async getById(id: string) {
		return this.prisma.cart.findUnique({
			where: { id }
		})
	}

	async create(dto: CartDto) {
		return this.prisma.cart.create({
			data: dto
		})
	}

	async update(dto: Partial<CartDto>, id: string) {
		return this.prisma.cart.update({
			where: { id },
			data: dto
		})
	}

	async delete(id: string) {
		return this.prisma.cart.delete({
			where: { id }
		})
	}
}
