import { Router } from "express";


import {
  create,
  list,
  listByMovie,
  findById,
  update,
  remove,
} from "./reviews.controller";

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
 *                 example: "665f1c2e8a1234567890abcd"
 *               movieId:
 *                 type: string
 *                 example: "665f1c2e8a1234567890efgh"
 *               comment:
 *                 type: string
 *                 example: "Excelente película"
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
 *                   example: "665f1c2e8a1234567890ijkl"
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
 *         description: Datos inválidos
 *       500:
 *         description: Error servidor
 */
router.post("/", create);

/**
 * @openapi
 * /api/v1/reviews:
 *   get:
 *     summary: Obtener todas las reseñas
 *     tags: [Reviews]
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
 *                     example: "665f1c2e8a1234567890ijkl"
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
 *         description: Error servidor
 */
router.get("/", list);

/**
 * @openapi
 * /api/v1/reviews/movie/{movieId}:
 *   get:
 *     summary: Obtener reseñas por película
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: movieId
 *         required: true
 *         schema:
 *           type: string
 *         example: "665f1c2e8a1234567890efgh"
 *     responses:
 *       200:
 *         description: Lista de reseñas de la película
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "665f1c2e8a1234567890ijkl"
 *                   userId:
 *                     type: string
 *                   movieId:
 *                     type: string
 *                   comment:
 *                     type: string
 *                     example: "Muy entretenida"
 *                   rating:
 *                     type: number
 *                     example: 4
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *       404:
 *         description: No se encontraron reseñas
 *       500:
 *         description: Error servidor
 */
router.get("/movie/:movieId", listByMovie);

/**
 * @openapi
 * /api/v1/reviews/{id}:
 *   get:
 *     summary: Obtener reseña por ID
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "665f1c2e8a1234567890ijkl"
 *     responses:
 *       200:
 *         description: Reseña encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "665f1c2e8a1234567890ijkl"
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
 *       404:
 *         description: Reseña no encontrada
 *       500:
 *         description: Error servidor
 */
router.get("/:id", findById);

/**
 * @openapi
 * /api/v1/reviews/{id}:
 *   put:
 *     summary: Actualizar reseña
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "665f1c2e8a1234567890ijkl"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comment:
 *                 type: string
 *                 example: "Ahora me gustó más la película"
 *               rating:
 *                 type: number
 *                 example: 5
 *     responses:
 *       200:
 *         description: Reseña actualizada correctamente
 *       404:
 *         description: Reseña no encontrada
 *       500:
 *         description: Error servidor
 */
router.put("/:id", update);

/**
 * @openapi
 * /api/v1/reviews/{id}:
 *   delete:
 *     summary: Eliminar reseña
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "665f1c2e8a1234567890ijkl"
 *     responses:
 *       200:
 *         description: Reseña eliminada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Reseña eliminada"
 *       404:
 *         description: Reseña no encontrada
 *       500:
 *         description: Error servidor
 */
router.delete("/:id", remove);

export default router;