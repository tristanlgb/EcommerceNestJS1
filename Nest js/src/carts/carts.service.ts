import { Injectable } from '@nestjs/common';
import { AddProductDto } from './dtos/add-product.dto';
import { UpdateQuantityDto } from './dtos/update-quantity.dto';

@Injectable()
export class CartsService {
  async addProduct(addProductDto: AddProductDto) {
    // Logic for adding product to the cart
  }

  async updateQuantity(updateQuantityDto: UpdateQuantityDto) {
    // Logic for updating product quantity in the cart
  }
}





