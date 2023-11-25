interface IFullName {
  firstName: string;
  lastName: string;
}

interface IAddress {
  street: string;
  city: string;
  country: string;
}

interface IOrder {
  productName: string;
  price: number;
  quantity: number;
}

interface IUser {
  userId: number;
  username: string;
  password: string;
  fullName: IFullName;
  age: number;
  email: string;
  isActive: 'active' | 'inActive';
  hobbies: string[];
  address: IAddress;
  orders: IOrder[];
}

export { IFullName, IAddress, IOrder, IUser };
