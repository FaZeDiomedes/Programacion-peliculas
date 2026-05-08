import { Router } from "express";

import { UsersController } from "./users.controller";

import { createUserSchema } from "./users.schema";

import { validate } from "../../middlewares/validate.middleware";

import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

const _UsersController =
  new UsersController();

/**
 * @openapi
 * /api/v1/users/register:
 *   post:
 *     summary: Registrar usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Juan Perez"
 *               email:
 *                 type: string
 *                 example: "juan@gmail.com"
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       201:
 *         description: Usuario registrado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "665f1c2e8a1234567890abcd"
 *                 name:
 *                   type: string
 *                   example: "Juan Perez"
 *                 email:
 *                   type: string
 *                   example: "juan@gmail.com"
 *                 password:
 *                   type: string
 *                   example: "$2b$10$hash"
 *                 role:
 *                   type: string
 *                   example: "user"
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error servidor
 */
router.post(
  "/register",
  validate(createUserSchema),
  _UsersController.register
);

/**
 * @openapi
 * /api/v1/users:
 *   get:
 *     summary: Obtener usuarios
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios
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
 *                   name:
 *                     type: string
 *                     example: "Juan Perez"
 *                   email:
 *                     type: string
 *                     example: "juan@gmail.com"
 *                   role:
 *                     type: string
 *                     example: "user"
 *       401:
 *         description: Token inválido o faltante
 *       500:
 *         description: Error servidor
 */
router.get(
  "/",
  authMiddleware,
  _UsersController.findAllUsers
);

/**
 * @openapi
 * /api/v1/users/{id}:
 *   get:
 *     summary: Obtener usuario por ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "665f1c2e8a1234567890abcd"
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "665f1c2e8a1234567890abcd"
 *                 name:
 *                   type: string
 *                   example: "Juan Perez"
 *                 email:
 *                   type: string
 *                   example: "juan@gmail.com"
 *                 role:
 *                   type: string
 *                   example: "user"
 *       404:
 *         description: Usuario no encontrado
 *       401:
 *         description: Token inválido o faltante
 *       500:
 *         description: Error servidor
 */
router.get(
  "/:id",
  authMiddleware,
  _UsersController.findById
);

/**
 * @openapi
 * /api/v1/users/{id}:
 *   put:
 *     summary: Actualizar usuario
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
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
 *               name:
 *                 type: string
 *                 example: "Juan Actualizado"
 *               email:
 *                 type: string
 *                 example: "nuevo@gmail.com"
 *               password:
 *                 type: string
 *                 example: "12345678"
 *               role:
 *                 type: string
 *                 example: "admin"
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente
 *       404:
 *         description: Usuario no encontrado
 *       401:
 *         description: Token inválido o faltante
 *       500:
 *         description: Error servidor
 */
router.put(
  "/:id",
  authMiddleware,
  _UsersController.update
);

/**
 * @openapi
 * /api/v1/users/{id}:
 *   delete:
 *     summary: Eliminar usuario
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "665f1c2e8a1234567890abcd"
 *     responses:
 *       200:
 *         description: Usuario eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Usuario eliminado"
 *       404:
 *         description: Usuario no encontrado
 *       401:
 *         description: Token inválido o faltante
 *       500:
 *         description: Error servidor
 */
router.delete(
  "/:id",
  authMiddleware,
  _UsersController.remove
);

export default router;