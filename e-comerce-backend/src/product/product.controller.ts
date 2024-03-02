import { Body, Controller, Get, Param } from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { ProductService } from './product.service'

@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Auth()
	@Get()
	async getAllProducts(@Body() id: string) {
		return this.productService.getAll(id)
	}

	@Auth()
	@Get()
	async getByTitle(@Param('name') name: string) {
		return this.productService.getAll(name)
	}
}
