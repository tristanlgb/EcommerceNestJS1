import { Module } from '@nestjs/common';
import { MongooseConfig } from './config/mongoose.config';
import { PassportConfig } from './config/passport.config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';

@Module({
  imports: [
    MongooseConfig,
    PassportConfig,
    AuthModule,
    UsersModule,
    ProductsModule,
    CartsModule,
  ],
})
export class AppModule {}

