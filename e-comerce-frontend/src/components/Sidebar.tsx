'use client'

import { cn } from '@/lib/utils'
import { MENU } from '@/sidebar-menu-url/MENU.data'
import { useSidebar } from '@/zustand/useSidebar'
import { usePathname } from 'next/navigation'
import { Logout } from './Logout'
import { SidebarHeader } from './SidebarHeader'
import { SidebarMunuItem } from './SidebarMunuItem'

export const Sidebar = () => {
	const { onOpen, onClose, state } = useSidebar()
	const pathname = usePathname()

	return (
		<div
			className={cn(
				'flex flex-col border-r-2 border-r-muted p-2',
				state
					? 'w-[100px] transition-all duration-700'
					: 'w-[230px] transition-all duration-700',
				pathname === '/auth/login' && 'hidden',
				pathname === '/auth/register' && 'hidden'
			)}
		>
			<SidebarHeader />
			<div className='pt-20'>
				{MENU.map(item => (
					<SidebarMunuItem key={item.url} data={item} />
				))}
			</div>
			<div className='text-center mt-[100px]'>
				<Logout />
			</div>
		</div>
	)
}
