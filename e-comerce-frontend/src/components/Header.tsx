'use client'

import { cn } from '@/lib/utils'
import { useSidebar } from '@/zustand/useSidebar'
import { Cart } from './Cart'
import { SearchProduct } from './SearchProduct'

interface IHeader {
	value: string
	setValue: (value: string) => void
}

export const Header = ({ value, setValue }: IHeader) => {
	const { state } = useSidebar()

	return (
		<div
			className={cn(
				'flex justify-start gap-x-20 items-center w-full p-[23px]'
				// state ? 'p-[24px] transition-all' : 'p-[31px] transition-all'
			)}
		>
			<h1 className='text-3xl font-semibold'>Menu</h1>
			<SearchProduct value={value} setValue={setValue} />
			<Cart />
		</div>
	)
}
