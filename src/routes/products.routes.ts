import { Router } from "express";
import {
  createProduct,
  getProductById,
  getProducts,
} from "../controllers/prouduct.controllers";

const router = Router();

router.get("/", getProducts);

router.get("/:id", getProductById);

router.post("/", createProduct);

export default router;
