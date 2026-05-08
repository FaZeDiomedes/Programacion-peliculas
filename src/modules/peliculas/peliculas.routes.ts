import { Router } from "express";

import {
  crearPelicula,
  obtenerPeliculas,
  obtenerPeliculaPorId,
  actualizarPelicula,
  eliminarPelicula,
} from "./peliculas.controller";

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
 *       201:
 *         description: Película creada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "665f1c2e8a1234567890abcd"
 *                 nombre:
 *                   type: string
 *                   example: "Inception"
 *                 año:
 *                   type: number
 *                   example: 2010
 *                 genero:
 *                   type: string
 *                   example: "Ciencia ficción"
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error servidor
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
 *                     example: "665f1c2e8a1234567890abcd"
 *                   nombre:
 *                     type: string
 *                     example: "Inception"
 *                   año:
 *                     type: number
 *                     example: 2010
 *                   genero:
 *                     type: string
 *                     example: "Ciencia ficción"
 *       500:
 *         description: Error servidor
 */
router.get("/", obtenerPeliculas);

/**
 * @openapi
 * /api/v1/peliculas/{id}:
 *   get:
 *     summary: Obtener película por ID
 *     tags: [Peliculas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "665f1c2e8a1234567890abcd"
 *     responses:
 *       200:
 *         description: Película encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "665f1c2e8a1234567890abcd"
 *                 nombre:
 *                   type: string
 *                   example: "Inception"
 *                 año:
 *                   type: number
 *                   example: 2010
 *                 genero:
 *                   type: string
 *                   example: "Ciencia ficción"
 *       404:
 *         description: Película no encontrada
 *       500:
 *         description: Error servidor
 */
router.get("/:id", obtenerPeliculaPorId);

/**
 * @openapi
 * /api/v1/peliculas/{id}:
 *   put:
 *     summary: Actualizar película
 *     tags: [Peliculas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "665f1c2e8a1234567890abcd"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Interstellar"
 *               año:
 *                 type: number
 *                 example: 2014
 *               genero:
 *                 type: string
 *                 example: "Drama espacial"
 *     responses:
 *       200:
 *         description: Película actualizada correctamente
 *       404:
 *         description: Película no encontrada
 *       500:
 *         description: Error servidor
 */
router.put("/:id", actualizarPelicula);

/**
 * @openapi
 * /api/v1/peliculas/{id}:
 *   delete:
 *     summary: Eliminar película
 *     tags: [Peliculas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "665f1c2e8a1234567890abcd"
 *     responses:
 *       200:
 *         description: Película eliminada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Película eliminada"
 *       404:
 *         description: Película no encontrada
 *       500:
 *         description: Error servidor
 */
router.delete("/:id", eliminarPelicula);

export default router;