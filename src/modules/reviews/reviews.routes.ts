import { Router } from "express";
import { create, listByMovie } from "./reviews.controller";

const router = Router();

router.post("/", create);
router.get("/:movieId", listByMovie);

export default router;