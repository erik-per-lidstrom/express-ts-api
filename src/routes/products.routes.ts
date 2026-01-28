import { Router } from "express";
import {
  create,
  deleteProduct,
  getProduct,
  getProductById,
  updateProduct,
} from "../controllers/prouduct.controllers";
import { protect, restrictTo } from "../middleware/auth.middelvware";

const router = Router();

router.get("/", getProduct);

router.get("/:id", getProductById);

router.post("/", restrictTo("admin", "modirator"), protect, create);

router.put("/:id", restrictTo("admin", "modirator"), protect, updateProduct);

router.delete("/:id", restrictTo("admin"), protect, deleteProduct);

export default router;
