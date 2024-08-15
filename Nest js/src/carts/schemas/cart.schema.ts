import { Schema, Document } from 'mongoose';

// Define the Cart interface extending mongoose Document
export interface Cart extends Document {
  userId: string;
  items: { productId: string; quantity: number }[];
}

// Define the Cart schema
export const CartSchema = new Schema<Cart>({
  userId: { type: String, required: true },
  items: [
    {
      productId: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
});
