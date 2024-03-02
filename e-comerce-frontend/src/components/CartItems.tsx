'use client'

import { useDeleteCart } from '@/hooks/useDeleteCart'
import { ICartResponse } from '@/types/cart.types'
import { Minus, Plus, Trash } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Hint } from './Hint'
import { Button } from './ui/button'

interface ICartItems {
	data: ICartResponse
}

export const CartItems = ({ data }: ICartItems) => {
	const [count, setCount] = useState(data.count)

	const { deleteCartItem } = useDeleteCart()

	const clickPlus = () => {
		setCount(prev => prev + 1)
	}

	const clickMinus = () => {
		if (count < 2) {
			return
		}
		setCount(prev => prev - 1)
	}

	return (
		<div className='flex flex-col gap-6 justify-center items-center p-2'>
			<div className='flex gap-x-8 justify-center items-center'>
				<Image src={data?.imgUrl} alt='product' width={70} height={70} />
				<h2>{data.name}</h2>
				<Button
					onClick={clickMinus}
					variant={'ghost'}
					asChild
					className='w-auto h-auto rounded-full cursor-pointer'
				>
					<Minus className='w-4 h-4 text-black' />
				</Button>
				<span>{count}</span>
				<Button
					onClick={clickPlus}
					variant={'ghost'}
					asChild
					className='w-auto h-auto rounded-full cursor-pointer'
				>
					<Plus className='text-black w-4 h-4' />
				</Button>
				<span>{count * data.price} руб</span>
				<Hint side='right' label='Удалить из корзины'>
					<Button
						onClick={() => deleteCartItem(data.id)}
						asChild
						variant={'ghost'}
						className='w-auto h-auto'
					>
						<Trash className='w-4 h-4 hover:text-red-500 transition-colors' />
					</Button>
				</Hint>
			</div>
		</div>
	)
}
