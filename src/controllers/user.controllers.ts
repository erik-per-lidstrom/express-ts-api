import { type Request, type Response } from "express";

const users = [
  {
    id: 1,
    name: "erik",
    job: "backend dev",
  },
  {
    id: 2,
    name: "jondo",
    job: "none",
  },
];

export const getUser = (req: Request, res: Response) => {
  res.status(200).json(users);
};

export const getUserById = (req: Request, res: Response) => {
  const userId = req.params.id;

  res.json({ id: userId });
};

export const createUser = (req: Request, res: Response) => {
  const { id, name, job } = req.body;

  res.status(201).json({ message: "user created", data: { id, name, job } });
};
