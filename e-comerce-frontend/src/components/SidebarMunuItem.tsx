import { ISidebarMenu } from '@/types/sidebar-menu.types'
import { useSidebar } from '@/zustand/useSidebar'
import Link from 'next/link'

interface ISidebarMenuItem {
	data: ISidebarMenu
}

export const SidebarMunuItem = ({ data }: ISidebarMenuItem) => {
	const { onOpen, onClose, state } = useSidebar()

	return (
		<>
			{state ? (
				<div className='flex flex-col gap-y-8 mt-10 p-2 hover:bg-neutral-500/10 transition-colors'>
					<Link href={data.url} className='flex justify-center items-center'>
						<data.icon className='w-6 h-6' />
					</Link>
				</div>
			) : (
				<div className='flex flex-col gap-y-8 w-full p-2 mt-10 border-2 border-dashed rounded-lg hover:bg-neutral-500/10 transition-colors'>
					<Link href={data.url} className='flex gap-x-20 p-1'>
						<data.icon />
						<p>{data.label}</p>
					</Link>
				</div>
			)}
		</>
	)
}
