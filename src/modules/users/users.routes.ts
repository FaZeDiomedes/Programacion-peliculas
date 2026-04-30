import { Router } from "express";
import { UsersController } from "./users.controller";
import { createUserSchema } from "./users.schema";
import { validate } from "../../middlewares/validate.middleware";
import { authMiddleware } from "../../middlewares/auth.middleware";


const router = Router();
const _UsersController = new UsersController();

/**
 * @openapi
 * /api/v1/users/register:
 *   post:
 *     summary: Registrar usuario (sin autenticación)
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
 *         description: Usuario creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "661f123abc123"
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *                 role:
 *                   type: string
 *                   example: "user"
 *       400:
 *         description: Error de validación o usuario ya existe
 */
router.post('/register', validate(createUserSchema), _UsersController.register);

/**
 * @openapi
 * /api/v1/users:
 *   get:
 *     summary: Obtener todos los usuarios (requiere token)
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
 *                     example: "661f123abc123"
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   password:
 *                     type: string
 *                   role:
 *                     type: string
 *       401:
 *         description: No autorizado (token inválido o faltante)
 */
router.get('/', authMiddleware, _UsersController.findAllUsers);

export default router;