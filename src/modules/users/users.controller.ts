import { Request, Response } from "express";
import { UsersService } from "./users.service";

export class UsersController {
  private _UsersService = new UsersService();

  register = async (
    req: Request,
    res: Response
  ) => {
    try {
      const result =
        await this._UsersService.register(
          req.body
        );

      res.status(201).json(result);
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  };

  findAllUsers = async (
    req: Request,
    res: Response
  ) => {
    try {
      const result =
        await this._UsersService.findAllUsers();

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({
        message: "Error servidor",
      });
    }
  };

  findById = async (
    req: Request,
    res: Response
  ) => {
    try {
      const id = req.params.id as string;

      const user =
        await this._UsersService.findById(id);

      if (!user) {
        return res.status(404).json({
          message:
            "Usuario no encontrado",
        });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({
        message: "Error servidor",
      });
    }
  };

  update = async (
    req: Request,
    res: Response
  ) => {
    try {
      const id = req.params.id as string;

      const updated =
        await this._UsersService.update(
          id,
          req.body
        );

      if (!updated) {
        return res.status(404).json({
          message:
            "Usuario no encontrado",
        });
      }

      res.status(200).json({
        message:
          "Usuario actualizado",
      });
    } catch (error) {
      res.status(500).json({
        message: "Error servidor",
      });
    }
  };

  remove = async (
    req: Request,
    res: Response
  ) => {
    try {
      const id = req.params.id as string;

      const deleted =
        await this._UsersService.delete(id);

      if (!deleted) {
        return res.status(404).json({
          message:
            "Usuario no encontrado",
        });
      }

      res.status(200).json({
        message:
          "Usuario eliminado",
      });
    } catch (error) {
      res.status(500).json({
        message: "Error servidor",
      });
    }
  };
}