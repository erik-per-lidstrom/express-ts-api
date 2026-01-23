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

const router = Router();

router.get("/", getUser);

router.get("/:id", getUserById);

router.post("/", validate(userZodSchema), create);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
