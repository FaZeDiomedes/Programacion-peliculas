import { Router } from "express";
import { AuthController } from "./auth.controller";

const router = Router();

const _AuthController =
  new AuthController();

/**
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     summary: Registrar usuario
 *     tags: [Auth]
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
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "665f1c2e8a1234567890abcd"
 *                     name:
 *                       type: string
 *                       example: "Juan Perez"
 *                     email:
 *                       type: string
 *                       example: "juan@gmail.com"
 *                     role:
 *                       type: string
 *                       example: "user"
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5..."
 *       400:
 *         description: Usuario ya existe
 *       500:
 *         description: Error servidor
 */
router.post(
  "/register",
  _AuthController.register
);

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: "juan@gmail.com"
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Login exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "665f1c2e8a1234567890abcd"
 *                     name:
 *                       type: string
 *                       example: "Juan Perez"
 *                     email:
 *                       type: string
 *                       example: "juan@gmail.com"
 *                     role:
 *                       type: string
 *                       example: "user"
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5..."
 *       401:
 *         description: Credenciales inválidas
 *       500:
 *         description: Error servidor
 */
router.post(
  "/login",
  _AuthController.login
);

/**
 * @openapi
 * /api/v1/auth:
 *   get:
 *     summary: Obtener usuarios
 *     tags: [Auth]
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
 *       500:
 *         description: Error servidor
 */
router.get(
  "/",
  _AuthController.findAll
);

/**
 * @openapi
 * api/v1/auth/{id}:
 *   get:
 *     summary: Obtener usuario por ID
 *     tags: [Auth]
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
 *       500:
 *         description: Error servidor
 */
router.get(
  "/:id",
  _AuthController.findById
);

/**
 * @openapi
 * /api/v1/auth/{id}:
 *   put:
 *     summary: Actualizar usuario
 *     tags: [Auth]
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
 *         description: Usuario actualizado
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error servidor
 */
router.put(
  "/:id",
  _AuthController.update
);

/**
 * @openapi
 * /api/v1/auth/{id}:
 *   delete:
 *     summary: Eliminar usuario
 *     tags: [Auth]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "665f1c2e8a1234567890abcd"
 *     responses:
 *       200:
 *         description: Usuario eliminado
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
 *       500:
 *         description: Error servidor
 */
router.delete(
  "/:id",
  _AuthController.remove
);

export default router;