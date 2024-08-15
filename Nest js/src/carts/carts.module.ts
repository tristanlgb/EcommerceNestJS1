import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartsController } from './carts.controller';
import { CartsService } from './carts.service';
import { CartSchema } from './schemas/cart.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cart', schema: CartSchema }])],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {}
