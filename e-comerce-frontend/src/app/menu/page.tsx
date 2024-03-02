'use client'

import { Header } from '@/components/Header'
import { Products } from '@/components/Products'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'

const MenuPage = () => {
	const [value, setValue] = useState('')

	return (
		<div className='w-full'>
			<Header value={value} setValue={setValue} />
			<Separator />
			<Products value={value} />
		</div>
	)
}

export default MenuPage
