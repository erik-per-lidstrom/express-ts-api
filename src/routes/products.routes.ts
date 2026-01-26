import { Router } from "express";
import {
  create,
  deleteProduct,
  getProduct,
  getProductById,
  updateProduct,
} from "../controllers/prouduct.controllers";
import { protect } from "../middleware/auth.middelvware";

const router = Router();

router.get("/", getProduct);

router.get("/:id", getProductById);

router.post("/", protect, create);

router.put("/:id", protect, updateProduct);

router.delete("/:id", protect, deleteProduct);

export default router;
