import { Router } from "express";
import { protect } from "../middleware/auth.middleware";
import {
  createUserController,
  deleteUserContoller,
  getUserByIdController,
  getUsersController,
  updateUserController,
} from "../controllers/user.controller";

const router = Router();

router.post("/", createUserController);

router.get("/", getUsersController);

router.get("/:id", getUserByIdController);

router.put("/:id", updateUserController);

router.delete("/:id", deleteUserContoller);

export default router;
