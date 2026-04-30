import { Router } from "express";
import { add, list, remove } from "./watchLater.controller";

const router = Router();

/**
 * @openapi
 * /api/v1/watch-later:
 *   post:
 *     summary: Agregar película a "ver más tarde"
 *     tags: [WatchLater]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - movieId
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "user123"
 *               movieId:
 *                 type: string
 *                 example: "movie456"
 *     responses:
 *       201:
 *         description: Película agregada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "661f123abc123"
 *                 userId:
 *                   type: string
 *                 movieId:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Faltan datos
 *       500:
 *         description: Error del servidor
 */
router.post("/", add);

/**
 * @openapi
 * /api/v1/watch-later/{userId}:
 *   get:
 *     summary: Obtener lista "ver más tarde" de un usuario
 *     tags: [WatchLater]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Lista de películas guardadas
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
 *                   userId:
 *                     type: string
 *                   movieId:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Error del servidor
 */
router.get("/:userId", list);

/**
 * @openapi
 * /api/v1/watch-later:
 *   delete:
 *     summary: Eliminar película de "ver más tarde"
 *     tags: [WatchLater]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - movieId
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "user123"
 *               movieId:
 *                 type: string
 *                 example: "movie456"
 *     responses:
 *       200:
 *         description: Eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Eliminado correctamente"
 *       404:
 *         description: No encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete("/", remove);

export default router;