'use client'

import {
	Drawer,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from '@/components/ui/drawer'
import { useCart } from '@/hooks/useCart'
import { ShoppingCart } from 'lucide-react'
import { CartItems } from './CartItems'
import { Button } from './ui/button'

export const Cart = () => {
	const { getCart } = useCart()
	const totalPrice = getCart?.reduce(
		(acc, item) => acc + item.price * item.count,
		0
	)

	return (
		<Drawer>
			<DrawerTrigger className='ml-auto mr-[80px] flex justify-center items-center hover:bg-gray-400/40 p-2 rounded-lg transition cursor-pointer'>
				<ShoppingCart className='w-8 h-8' />
				<div className='rounded-full bg-red-500 text-white w-6 h-6'>
					<span className='flex justify-center items-center'>
						{getCart?.length}
					</span>
				</div>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle className='text-center text-4xl font-semibold'>
						Корзина
					</DrawerTitle>
				</DrawerHeader>
				{getCart?.length ? (
					getCart?.map(cart => <CartItems key={cart.id} data={cart} />)
				) : (
					<p className='text-sm text-muted-foreground text-center'>
						В корзине нет товаров, перейдите в меню и нажмите кнопку купить
						чтобы сделать заказ
					</p>
				)}
				<DrawerFooter>
					<div className='flex justify-center items-center'>
						<h1 className='text-2xl font-semibold'>Итого: {totalPrice} руб</h1>
					</div>
					<Button variant={'buy'}>Оплатить</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
