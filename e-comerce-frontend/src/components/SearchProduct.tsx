'use client'

import { SearchIcon, XCircle } from 'lucide-react'
import { Hint } from './Hint'
import { Input } from './ui/input'

interface ISearchProduct {
	value: string
	setValue: (value: string) => void
}

export const SearchProduct = ({ value, setValue }: ISearchProduct) => {
	const onChange = (newValue: string) => {
		setValue(newValue)
	}

	return (
		<div className='relative ml-[174px]'>
			<Input
				value={value}
				onChange={e => onChange(e.target.value)}
				placeholder={'Search...'}
				maxLength={100}
				className='pl-10 pr-10 rounded-xl focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 select-none'
				size={60}
			/>
			<div className='absolute top-[9px] '>
				<SearchIcon className='w-5 h-5 opacity-20 ml-2' />
			</div>
			{value ? (
				<div className='absolute right-2 top-[9px]'>
					<Hint side={'right'} label='Очистить поле'>
						<XCircle onClick={() => setValue('')} className='opacity-20' />
					</Hint>
				</div>
			) : null}
		</div>
	)
}
