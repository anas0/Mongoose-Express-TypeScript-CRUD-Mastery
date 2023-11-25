import { Schema, model } from 'mongoose';
import { IAddress, IFullName, IOrder, IUser } from './user.interface';

const fullNameSchema = new Schema<IFullName>({
  firstName: String,
  lastName: String,
});

const addressSchema = new Schema<IAddress>({
  street: String,
  city: String,
  country: String,
});

const orderSchema = new Schema<IOrder>({
  productName: String,
  price: Number,
  quantity: Number,
});

const userSchema = new Schema<IUser>({
  userId: Number,
  username: String,
  password: String,
  fullName: fullNameSchema,
  age: Number,
  email: String,
  isActive: {
    type: String,
    enum: {
      values: ['active', 'inActive'],
      message: '{VALUE} is not a valid status',
    },
    default: 'active',
  },
  hobbies: [String],
  address: addressSchema,
  orders: [orderSchema],
});

const User = model<IUser>('User', userSchema);

export default User;
