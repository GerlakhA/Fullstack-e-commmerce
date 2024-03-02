import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { PrismaService } from './prisma.service'
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';

@Module({
	imports: [AuthModule, ConfigModule.forRoot(), UserModule, ProductModule, CartModule],
	providers: [PrismaService]
})
export class AppModule {}
