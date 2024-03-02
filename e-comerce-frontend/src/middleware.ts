import { NextRequest, NextResponse } from 'next/server'
import { EnumTokens } from './services/auth-token.service'

export async function middleware(req: NextRequest, res: NextResponse) {
	const { url, cookies } = req

	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const isAuthPage = url.includes('/auth/register')

	if (isAuthPage && refreshToken) {
		return NextResponse.redirect(new URL('/', url))
	}

	if (isAuthPage) {
		return NextResponse.next()
	}

	if (!refreshToken) {
		return NextResponse.redirect(new URL('/auth/register', req.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/', '/menu', '/sale', '/orders']
}
