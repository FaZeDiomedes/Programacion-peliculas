import { Router } from "express";
import { add, list, remove } from "./watchLater.controller";

const router = Router();

router.post("/", add);
router.get("/:userId", list);
router.delete("/", remove);

export default router;