'use client'

import { useProducts } from '@/hooks/useProducts'
import { ProductItem } from './ProductItem'

interface Param {
	value: string
}

export const Products = ({ value }: Param) => {
	const { Products } = useProducts()
	// const { value } = useContext(context)
	// const param = useParams()

	// console.log(value)

	// const matchingCartItem = Products?.filter(item => item.id === id)

	return (
		<div className='p-[46px] grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-6'>
			{Products?.filter(item =>
				item.name?.toLowerCase().includes(value?.toLowerCase())
			).map(item => (
				<ProductItem key={item.id} item={item} />
			))}
		</div>
	)
}
