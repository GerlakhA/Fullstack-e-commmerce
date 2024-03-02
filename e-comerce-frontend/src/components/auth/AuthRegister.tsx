'use client'

import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { useRegister } from '@/hooks/useRegister'
import { IAuthForm } from '@/types/auth.types'
import Link from 'next/link'
import { useTransition } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../ui/button'

export const AuthRegister = () => {
	const [isPending, startTransition] = useTransition()
	const { Register } = useRegister()

	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onSubmit',
		defaultValues: {
			name: '',
			email: '',
			password: ''
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		startTransition(() => {
			Register(data)
		})
	}

	return (
		<div className='flex flex-col gap-y-4 w-[400px] p-4 border border-border min-h-[400px] max-h-[500px] bg-white/20 rounded-lg'>
			<h2 className='text-2xl font-semibold text-center'>Register</h2>
			<Separator />
			<form onSubmit={handleSubmit(onSubmit)} {...register}>
				<div className='flex flex-col gap-4 justify-center items-start'>
					<Input
						id='name'
						type='text'
						disabled={isPending}
						placeholder='Enter name...'
						{...register('name')}
						className='mt-16'
					/>
					<Input
						id='email'
						type='email'
						disabled={isPending}
						placeholder='Enter email...'
						{...register('email', {
							required: 'Email is required!'
						})}
					/>
					<Input
						type='password'
						disabled={isPending}
						placeholder='Enter password...'
						{...register('password', {
							required: 'Password is required!',
							min: 6
						})}
					/>
				</div>
				<div className='mt-6'>
					<Button
						type='submit'
						variant={'outline'}
						size={'lg'}
						className='p-2 w-full'
					>
						Register
					</Button>
				</div>
			</form>
			<div className='flex justify-center items-center gap-x-4'>
				<span className='text-muted-foreground text-sm'>
					You already have an account?
				</span>
				<Link href={'/auth/login'}>
					<Button
						variant={'link'}
						className='opacity-50 hover:opacity-100 transition-all'
					>
						Login
					</Button>
				</Link>
			</div>
		</div>
	)
}
