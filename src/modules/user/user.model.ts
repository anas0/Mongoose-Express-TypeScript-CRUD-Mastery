import { Schema, model } from 'mongoose';
import { IAddress, IFullName, IOrder, IUser } from './user.interface';

const fullNameSchema = new Schema<IFullName>({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

const addressSchema = new Schema<IAddress>({
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
});

const orderSchema = new Schema<IOrder>({
  productName: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});

const userSchema = new Schema<IUser>({
  userId: {
    type: Number,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  fullName: {
    type: fullNameSchema,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
  isActive: {
    type: Boolean,
  },
  hobbies: {
    type: [String],
  },
  address: {
    type: addressSchema,
  },
  orders: {
    type: [orderSchema],
  },
});

// post save middleware
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

//  Query middleware
// userSchema.pre('find', function (next) {
//   this.find({ userSchema: { $in: ['username', 'age', 'email', 'address'] } });
//   next();
// });

const User = model<IUser>('User', userSchema);

export default User;
