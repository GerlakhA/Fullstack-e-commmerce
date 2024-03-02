import { ISidebarMenu } from '@/types/sidebar-menu.types'
import { BadgePercent, Carrot, Settings, ShoppingBag } from 'lucide-react'

export const MENU: ISidebarMenu[] = [
	{
		url: '/menu',
		label: 'Menu',
		icon: Carrot
	},
	{
		url: '/sale',
		label: 'Sale',
		icon: BadgePercent
	},
	{
		url: '/orders',
		label: 'Orders',
		icon: ShoppingBag
	},
	{
		url: '/settings',
		label: 'Settings',
		icon: Settings
	}
]
