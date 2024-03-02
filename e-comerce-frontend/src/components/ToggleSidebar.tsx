import { Button } from '@/components/ui/button'
import { useSidebar } from '@/zustand/useSidebar'
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react'
import { Hint } from './Hint'

export const ToggleSidebar = () => {
	const { onOpen, onClose, state } = useSidebar()
	const label = state ? 'Развернуть' : 'Свернуть'

	return (
		<>
			{state && (
				<div className='hidden lg:flex'>
					<Hint label={label} side='right' asChild>
						<Button
							onClick={() => onClose()}
							className='ml-auto'
							variant='ghost'
						>
							<ArrowRightFromLine className='h-4 w-4' />
						</Button>
					</Hint>
				</div>
			)}
			{!state && (
				<div className='hidden lg:flex pl-2 pb-1'>
					<Hint label={label} side='right' asChild>
						<Button
							onClick={() => onOpen()}
							className='ml-auto'
							variant='ghost'
						>
							<ArrowLeftFromLine className='h-4 w-4' />
						</Button>
					</Hint>
				</div>
			)}
		</>
	)
}
