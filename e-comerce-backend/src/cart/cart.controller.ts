import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CartService } from './cart.service'
import { CartDto } from './dto/cart.dto'

@Controller('cart')
export class CartController {
	constructor(private readonly cartService: CartService) {}

	@Auth()
	@Get()
	async getAll(@Body() id: string) {
		return this.cartService.getAll(id)
	}

	@UsePipes(new ValidationPipe())
	@Auth()
	@Post()
	async create(@Body() dto: CartDto) {
		return this.cartService.create(dto)
	}

	@UsePipes(new ValidationPipe())
	@Auth()
	@Put()
	async update(@Body() dto: CartDto, id: string) {
		return this.cartService.update(dto, id)
	}

	@Auth()
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return this.cartService.delete(id)
	}
}
