import { Router } from "express";
import {
  create,
  deleteUser,
  getUser,
  getUserById,
  updateUser,
} from "../controllers/user.controllers";
import { validate } from "../middleware/validate.middleware";
import { userZodSchema } from "../models/user.model";
import { protect } from "../middleware/auth.middelvware";

const router = Router();

router.get("/", protect, getUser);

router.get("/:id", getUserById);

router.post("/", validate(userZodSchema), create);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
