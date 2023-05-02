import { Router } from "express";
import * as fn from "../controllers/user";

const router = Router();

router.get("/", fn.viewUserList);
router.post("/", fn.createUser);
router.patch("/", fn.updateUserInfo);
router.delete("/", fn.deleteUser);

export default router;
