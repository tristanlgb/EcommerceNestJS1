import { Schema, Document } from 'mongoose';
import * as bcrypt from 'bcrypt';


export interface User extends Document {
  username: string;
  password: string;
  email: string;
  role?: string;
  comparePassword: (password: string) => Promise<boolean>;
}


export const UserSchema = new Schema<User>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, default: 'user' },
});


UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};
