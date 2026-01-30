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

router.get("/", protect, restrictTo("admin"), getProduct);

router.get("/:id", protect, restrictTo("admin"), getProductById);

router.post("/", protect, restrictTo("admin"), create);

router.put("/:id", protect, restrictTo("admin"), updateProduct);

router.delete("/:id", protect, restrictTo("admin"), deleteProduct);

export default router;
