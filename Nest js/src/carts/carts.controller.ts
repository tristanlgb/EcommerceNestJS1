import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { CartsService } from './carts.service';
import { AddProductDto } from './dtos/add-product.dto';
import { UpdateQuantityDto } from './dtos/update-quantity.dto';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post('add')
  addProduct(@Body() addProductDto: AddProductDto) {
    return this.cartsService.addProduct(addProductDto);
  }

  @Put('update-quantity')
  updateQuantity(@Body() updateQuantityDto: UpdateQuantityDto) {
    return this.cartsService.updateQuantity(updateQuantityDto);
  }
}
