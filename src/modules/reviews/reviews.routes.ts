import { Router } from "express";
import { create, listByMovie } from "./reviews.controller";

const router = Router();

/**
 * @openapi
 * /api/v1/reviews:
 *   post:
 *     summary: Crear una reseña
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - movieId
 *               - comment
 *               - rating
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "user123"
 *               movieId:
 *                 type: string
 *                 example: "movie456"
 *               comment:
 *                 type: string
 *                 example: "Muy buena película"
 *               rating:
 *                 type: number
 *                 example: 5
 *     responses:
 *       201:
 *         description: Reseña creada correctamente
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
 *                 comment:
 *                   type: string
 *                 rating:
 *                   type: number
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Datos inválidos (faltantes o rating fuera de rango)
 *       500:
 *         description: Error del servidor
 */
router.post("/", create);

/**
 * @openapi
 * /api/v1/reviews/{movieId}:
 *   get:
 *     summary: Obtener reseñas por película
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: movieId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la película
 *     responses:
 *       200:
 *         description: Lista de reseñas
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
 *                   comment:
 *                     type: string
 *                   rating:
 *                     type: number
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Error del servidor
 */
router.get("/:movieId", listByMovie);

export default router;
