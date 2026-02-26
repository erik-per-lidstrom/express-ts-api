import { NextFunction, Request, Response } from "express";
import {
  createUserService,
  deleteUserService,
  getUserByIdService,
  getUsersService,
  updateUserService,
} from "../services/user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, email } = req.body;
  try {
    const user = await createUserService(name, email);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await getUsersService();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.body;
  try {
    const user = await getUserByIdService(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, id } = req.body;
  try {
    const user = await updateUserService(name, id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.body;
  try {
    const user = await deleteUserService(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
