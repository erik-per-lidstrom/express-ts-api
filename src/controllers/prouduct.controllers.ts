import { type Request, type Response } from "express";

const users = [
  {
    id: 1,
    name: "ipad",
  },
  {
    id: 2,
    name: "macbook",
  },
];

export const getProducts = (req: Request, res: Response) => {
  res.status(200).json(users);
};

export const getProductById = (req: Request, res: Response) => {
  const productId = req.params.id;

  res.json({ id: productId });
};

export const createProduct = (req: Request, res: Response) => {
  const { id, name, job } = req.body;

  res.status(201).json({ message: "product created", data: { id, name, job } });
};
