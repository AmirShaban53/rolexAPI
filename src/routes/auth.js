import { Router } from "express";
import * as fn from "../controllers/auth";

const router = Router();

router.post("/register/", fn.registerUser);
router.post("/login/", fn.loginUser);

export default router;
