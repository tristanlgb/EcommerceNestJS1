import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart } from './schemas/cart.schema';
import { AddProductDto } from './dtos/add-product.dto';
import { UpdateQuantityDto } from './dtos/update-quantity.dto';

@Injectable()
export class CartsService {
  constructor(@InjectModel('Cart') private readonly cartModel: Model<Cart>) {}

  async addProduct(addProductDto: AddProductDto, userId: string) {
    const { productId, quantity } = addProductDto;

    const cart = await this.cartModel.findOne({ userId });

    if (cart) {
      // Check if the product is already in the cart
      const itemIndex = cart.items.findIndex(item => item.productId === productId);

      if (itemIndex > -1) {
        // Product exists, update the quantity
        cart.items[itemIndex].quantity += quantity;
      } else {
        // Product does not exist, add new item
        cart.items.push({ productId, quantity });
      }
      
      // Save the updated cart
      return cart.save();
    } else {
      // Create a new cart if it does not exist
      const newCart = new this.cartModel({
        userId,
        items: [{ productId, quantity }],
      });
      return newCart.save();
    }
  }

  async updateQuantity(updateQuantityDto: UpdateQuantityDto, userId: string) {
    const { productId, quantity } = updateQuantityDto;

    const cart = await this.cartModel.findOne({ userId });

    if (!cart) {
      throw new Error('Cart not found');
    }

    const itemIndex = cart.items.findIndex(item => item.productId === productId);

    if (itemIndex > -1) {
      // Update the quantity of the product
      cart.items[itemIndex].quantity = quantity;
      
      // Remove the item if the quantity is zero
      if (quantity <= 0) {
        cart.items.splice(itemIndex, 1);
      }

      // Save the updated cart
      return cart.save();
    } else {
      throw new Error('Product not found in cart');
    }
  }
}



