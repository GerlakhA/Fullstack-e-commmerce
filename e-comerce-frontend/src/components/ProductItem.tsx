'use client'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTrigger
} from '@/components/ui/dialog'
import { useAddToCart } from '@/hooks/useAddToCart'
import { IProduct } from '@/types/product.types'
import Image from 'next/image'

export const ProductItem = ({ item }: { item: IProduct }) => {
	const { addToCart } = useAddToCart()

	const handleAddToCart = (data: IProduct) => {
		addToCart(data)
	}

	return (
		<Dialog>
			<DialogTrigger>
				<div className='flex flex-col gap-y-4 w-[282px] h-[394px] rounded-lg border bg-[#fff] text-center hover:shadow-lg transition'>
					<Image
						src={item.imgUrl ?? ''}
						alt='product'
						width={242}
						height={239}
						className='flex justify-center'
					/>
					<p className='text-md'>{item.name}</p>
					<p className='mt-8 p-4 font-bold text-md text-start'>
						{item.price} ₽
					</p>
				</div>
			</DialogTrigger>
			<DialogContent>
				<div className='flex flex-col gap-y-4'>
					<div className='flex gap-x-4 items-center'>
						<Image
							src={item.imgUrl ?? ''}
							alt='product'
							width={242}
							height={239}
							className='flex justify-center'
						/>
						<p className='text-3xl font-bold'>{item.name}</p>
					</div>
				</div>
				<DialogDescription>
					<div className='w-full bg-[#f9f9f9f9] p-2'>
						<span>Описание</span>
					</div>
					<div className='p-4'>
						<p className='overflow-y-hidden'>{item.description}</p>
					</div>
					<div className='w-full bg-[#f9f9f9f9] p-2'>
						<span>Цена для города</span>
					</div>
					<div className='p-4'>
						<p>Москва</p>
						<p className='opacity-80 mt-4'>
							Цены и ассортименты продуктов на сайте указаны для выбранного вами
							региона и могут отличаться в конкретном предприятии. Наличие
							продуктов и цену уточняйте в выбранном предприятии.
						</p>
					</div>
				</DialogDescription>
				<div className='flex justify-between gap-x-2'>
					<div className='flex flex-col'>
						<span className='text-sm opacity-60'>Сумма</span>
						<p className='text-md font-bold'>От {item.price} ₽</p>
					</div>
					<div>
						<Button
							onClick={() => handleAddToCart({ ...item })}
							variant={'buy'}
							size={'lg'}
							className='p-2'
						>
							В корзину
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
