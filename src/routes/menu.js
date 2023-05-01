import { Router } from "express";
import * as fn from "../controllers/menu";

const router = Router();

router.get("/", fn.viewMenuItems);
router.post("/", fn.createMenuItem);
router.patch("/", fn.updateMenuItem);
router.delete("/", fn.deleteMenuItem);

export default router;
