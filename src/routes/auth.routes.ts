import { Router } from "express";
import {
  loginControler,
  regiseterControler,
} from "../controllers/auth.controller";
import { validate } from "../middleware/validate.middleware";
import { registerUserValidation } from "../models/user.model";

const router = Router();

router.post("/register", validate(registerUserValidation), regiseterControler);

router.post("/login", loginControler);

export default router;
