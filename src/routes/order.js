import { Router } from "express";
import * as fn from "../controllers/order";

const router = Router();

router.get("/", fn.viewOrderList);
router.post("/", fn.createOrderItem);
router.patch("/", fn.updateOrderItem);
router.delete("/", fn.deleteOrderItem);

export default router;
