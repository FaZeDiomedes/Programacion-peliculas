import { Router } from "express";
import { crearPelicula, obtenerPeliculas } from "./peliculas.controller";

const router = Router();

router.post("/", crearPelicula);
router.get("/", obtenerPeliculas);

export default router;