import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.enableCors({
		origin: 'http://localhost:3000',
		credentials: true,
		exposedHeaders: 'set-cookie'
	})

	app.use(cookieParser())

	app.setGlobalPrefix('api')

	await app.listen(3030)
}
bootstrap()
