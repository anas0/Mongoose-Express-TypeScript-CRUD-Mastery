import { Schema, model } from 'mongoose';
import { IAddress, IFullName, IOrder, IUser } from './user.interface';

const fullNameSchema = new Schema<IFullName>({
  firstName: {
    type: String,
    required: [true, 'Please tell us your firstName'],
  },
  lastName: {
    type: String,
    required: [true, 'Please tell us your lastName'],
  },
});

const addressSchema = new Schema<IAddress>({
  street: {
    type: String,
    required: [true, 'Please tell us your street'],
  },
  city: {
    type: String,
    required: [true, 'Please tell us your city'],
  },
  country: {
    type: String,
    required: [true, 'Please tell us your country'],
  },
});

const orderSchema = new Schema<IOrder>({
  productName: {
    type: String,
    required: [true, 'Please tell us your productName'],
  },
  price: {
    type: Number,
    required: [true, 'Please tell us your price'],
  },
  quantity: {
    type: Number,
    required: [true, 'Please tell us your quantity'],
  },
});

const userSchema = new Schema<IUser>({
  userId: {
    type: Number,
    required: [true, 'Please tell us your userId'],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'Please tell us your username'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please tell us your password'],
    select: false,
  },
  fullName: {
    type: fullNameSchema,
    required: [true, 'fullName is required'],
  },
  age: {
    type: Number,
    required: [true, 'Please tell us your age'],
  },
  email: {
    type: String,
    required: [true, 'Please tell us your email'],
  },
  isActive: {
    type: Boolean,
    required: [true, 'Please tell us your isActive status'],
  },
  hobbies: {
    type: [String],
    required: [true, 'Please tell us your hobbies'],
  },
  address: {
    type: addressSchema,
    required: [true, 'address is required'],
  },
  orders: {
    type: [orderSchema],
    required: [true, 'orders is required'],
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
