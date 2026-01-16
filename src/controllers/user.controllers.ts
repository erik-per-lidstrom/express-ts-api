import { type Request, type Response } from "express";
import { createdUser, getAllUsers } from "../services/user.services";

export const getUser = async (req: Request, res: Response) => {
  const AllUsers = await getAllUsers();
  res.status(200).json(AllUsers);
};

export const getUserById = (req: Request, res: Response) => {
  const userId = req.params.id;

  res.json({ id: userId });
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, job, email } = req.body;
    const newUser = await createdUser(name, job, email);
    res.status(201).json({ status: "user created sucsesfuly", user: newUser });
  } catch (error) {
    res
      .status(403)
      .json({ message: "error creating user email alrady used", error });
  }
};
