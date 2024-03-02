import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class ProductService {
	constructor(private prisma: PrismaService) {}

	getAll(id: string) {
		return this.prisma.product.findMany({
			where: { id }
		})
	}

	getByTitle(name: string) {
		return this.prisma.product.findMany({
			where: { name }
		})
	}
}
