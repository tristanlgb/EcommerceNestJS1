import { Controller, Post, Body, Put, Param, Req } from '@nestjs/common';
import { CartsService } from './carts.service';
import { AddProductDto } from './dtos/add-product.dto';
import { UpdateQuantityDto } from './dtos/update-quantity.dto';
import { Request } from 'express';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post('add')
  addProduct(@Body() addProductDto: AddProductDto, @Req() req: Request) {
    const userId = req.user.id; // Assuming user ID is available in request
    return this.cartsService.addProduct(addProductDto, userId);
  }

  @Put('update-quantity')
  updateQuantity(@Body() updateQuantityDto: UpdateQuantityDto, @Req() req: Request) {
    const userId = req.user.id; // Assuming user ID is available in request
    return this.cartsService.updateQuantity(updateQuantityDto, userId);
  }
}
