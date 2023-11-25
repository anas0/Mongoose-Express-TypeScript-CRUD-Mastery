/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { UserServices } from './user.service';
import userValidationSchema from './user.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    // data validation using Zod
    const zodParsedData = userValidationSchema.parse(userData);

    const result = await UserServices.createUser(zodParsedData);

    res.status(200).json({
      status: 'success',
      message: 'User created successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      status: 'Fail',
      message: error.message || 'Something went wrong',
    });
  }
};

export const UserController = {
  createUser,
};
