import { Router } from "express";
import { crearPelicula, obtenerPeliculas } from "./peliculas.controller";

const router = Router();

/**
 * @openapi
 * /api/v1/peliculas:
 *   post:
 *     summary: Crear una nueva película
 *     tags: [Peliculas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - año
 *               - genero
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Inception"
 *               año:
 *                 type: number
 *                 example: 2010
 *               genero:
 *                 type: string
 *                 example: "Ciencia ficción"
 *     responses:
 *       200:
 *         description: Película creada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "661f123abc123"
 *                 nombre:
 *                   type: string
 *                 año:
 *                   type: number
 *                 genero:
 *                   type: string
 *       400:
 *         description: Error en los datos enviados
 */
router.post("/", crearPelicula);

/**
 * @openapi
 * /api/v1/peliculas:
 *   get:
 *     summary: Obtener todas las películas
 *     tags: [Peliculas]
 *     responses:
 *       200:
 *         description: Lista de películas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "661f123abc123"
 *                   nombre:
 *                     type: string
 *                     example: "Inception"
 *                   año:
 *                     type: number
 *                     example: 2010
 *                   genero:
 *                     type: string
 *                     example: "Ciencia ficción"
 */
router.get("/", obtenerPeliculas);

export default router;