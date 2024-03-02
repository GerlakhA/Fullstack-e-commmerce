'use client'

import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { useLogin } from '@/hooks/useLogin'
import { IAuthForm } from '@/types/auth.types'
import Link from 'next/link'
import { useTransition } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../ui/button'

export const AuthLogin = () => {
	const [isPending, startTransition] = useTransition()
	const { Login } = useLogin()

	const { register, handleSubmit } = useForm<IAuthForm>({
		mode: 'onSubmit',
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		startTransition(() => {
			Login(data)
		})
	}

	return (
		<div className='flex flex-col gap-y-4 w-[400px] p-4 border border-border min-h-[400px] max-h-[500px] bg-white/20 rounded-lg'>
			<h2 className='text-2xl font-semibold text-center'>Login</h2>
			<Separator />
			<form onSubmit={handleSubmit(onSubmit)} {...register}>
				<div className='flex flex-col gap-4 justify-center items-start'>
					<Input
						id='email'
						type='email'
						disabled={isPending}
						placeholder='Enter email...'
						{...register('email', {
							required: 'Email is required!'
						})}
						className='mt-16'
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
						Login
					</Button>
				</div>
			</form>
			<div className='flex justify-center items-center gap-x-4'>
				<span className='text-muted-foreground text-sm'>
					You don't have account?
				</span>
				<Link href={'/auth/register'}>
					<Button
						variant={'link'}
						className='opacity-50 hover:opacity-100 transition-all'
					>
						Register
					</Button>
				</Link>
			</div>
		</div>
	)
}
