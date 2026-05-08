import { Router } from "express";

import {
  add,
  list,
  listByUser,
  findById,
  update,
  remove,
} from "./watchLater.controller";

const router = Router();

/**
 * @openapi
 * /api/v1/watch-later:
 *   post:
 *     summary: Agregar película a ver más tarde
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
 *                 example: "665f1c2e8a1234567890abcd"
 *               movieId:
 *                 type: string
 *                 example: "665f1c2e8a1234567890efgh"
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
 *                   example: "665f1c2e8a1234567890ijkl"
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
 *         description: Error servidor
 */
router.post("/", add);

/**
 * @openapi
 * /api/v1/watch-later:
 *   get:
 *     summary: Obtener todos los registros
 *     tags: [WatchLater]
 *     responses:
 *       200:
 *         description: Lista de registros
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
 *                     example: "665f1c2e8a1234567890abcd"
 *                   movieId:
 *                     type: string
 *                     example: "665f1c2e8a1234567890efgh"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Error servidor
 */
router.get("/", list);

/**
 * @openapi
 * /api/v1/watch-later/user/{userId}:
 *   get:
 *     summary: Obtener lista por usuario
 *     tags: [WatchLater]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         example: "665f1c2e8a1234567890abcd"
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
 *                     example: "665f1c2e8a1234567890ijkl"
 *                   userId:
 *                     type: string
 *                   movieId:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error servidor
 */
router.get(
  "/user/:userId",
  listByUser
);

/**
 * @openapi
 * /api/v1/watch-later/{id}:
 *   get:
 *     summary: Obtener elemento por ID
 *     tags: [WatchLater]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "665f1c2e8a1234567890ijkl"
 *     responses:
 *       200:
 *         description: Registro encontrado
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
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Registro no encontrado
 *       500:
 *         description: Error servidor
 */
router.get("/:id", findById);

/**
 * @openapi
 * /api/v1/watch-later/{id}:
 *   put:
 *     summary: Actualizar elemento
 *     tags: [WatchLater]
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
 *               userId:
 *                 type: string
 *                 example: "665f1c2e8a1234567890abcd"
 *               movieId:
 *                 type: string
 *                 example: "665f1c2e8a1234567890zzzz"
 *     responses:
 *       200:
 *         description: Registro actualizado correctamente
 *       404:
 *         description: Registro no encontrado
 *       500:
 *         description: Error servidor
 */
router.put("/:id", update);

/**
 * @openapi
 * /api/v1/watch-later/{id}:
 *   delete:
 *     summary: Eliminar elemento
 *     tags: [WatchLater]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "665f1c2e8a1234567890ijkl"
 *     responses:
 *       200:
 *         description: Registro eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Eliminado correctamente"
 *       404:
 *         description: Registro no encontrado
 *       500:
 *         description: Error servidor
 */
router.delete("/:id", remove);

export default router;