import { IUser } from './user.interface';
import User from './user.model';

const createUser = async (user: IUser) => {
  const result = await User.create(user);
  return result;
};

const getAllUsers = async () => {
  const result = await User.find();
  return result;
};

const getSingleUser = async (userId: string) => {
  const result = await User.findOne({ userId });
  return result;
};

const updateUser = async (userId: string, userData: IUser) => {
  const result = await User.findOneAndUpdate({
    userId,
    userData,
    // new: true,
    // runValidators: true,
  });
  return result;
};

const deleteUser = async (userId: string) => {
  const result = await User.findOneAndDelete({ userId });
  return result;
};

export const UserServices = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
