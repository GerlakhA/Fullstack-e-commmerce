import { ToggleSidebar } from './ToggleSidebar'
import { UserProfile } from './UserProfile'

export const SidebarHeader = () => {
	return (
		<>
			<div className='flex justify-between items-center p-2'>
				<UserProfile />
				<ToggleSidebar />
			</div>
			{/* <Separator className='mt-4' /> */}
		</>
	)
}
