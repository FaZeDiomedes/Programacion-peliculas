import {
  Request,
  Response,
  NextFunction,
} from "express";

import { AuthService } from "./auth.service";

export class AuthController {
  private _AuthService = new AuthService();

  register = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result =
        await this._AuthService.register(
          req.body
        );

      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };

  login = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result =
        await this._AuthService.login(req.body);

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  findAll = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const users =
        await this._AuthService.findAll();

      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  };

  findById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id as string;

      const user =
        await this._AuthService.findById(id);

      if (!user) {
        return res.status(404).json({
          message: "Usuario no encontrado",
        });
      }

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };

  update = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id as string;

      const updated =
        await this._AuthService.update(
          id,
          req.body
        );

      if (!updated) {
        return res.status(404).json({
          message: "Usuario no encontrado",
        });
      }

      res.status(200).json({
        message: "Usuario actualizado",
      });
    } catch (error) {
      next(error);
    }
  };

  remove = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id as string;

      const deleted =
        await this._AuthService.delete(id);

      if (!deleted) {
        return res.status(404).json({
          message: "Usuario no encontrado",
        });
      }

      res.status(200).json({
        message: "Usuario eliminado",
      });
    } catch (error) {
      next(error);
    }
  };
}