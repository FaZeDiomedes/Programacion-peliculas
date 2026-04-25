import { Request, Response } from "express";
import {
  addWatchLater,
  getWatchLaterByUser,
  removeWatchLater,
} from "./watchLater.service";

// Agregar
export const add = async (req: Request, res: Response) => {
  try {
    const { userId, movieId } = req.body;

    if (!userId || !movieId) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    const item = await addWatchLater(userId, movieId);

    return res.status(201).json(item);
  } catch (error) {
    return res.status(500).json({ message: "Error servidor" });
  }
};

// Listar
export const list = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId as string;

    const list = await getWatchLaterByUser(userId);

    return res.json(list);
  } catch (error) {
    return res.status(500).json({ message: "Error servidor" });
  }
};

// Eliminar
export const remove = async (req: Request, res: Response) => {
  try {
    const { userId, movieId } = req.body;

    const ok = await removeWatchLater(userId, movieId);

    if (!ok) {
      return res.status(404).json({ message: "No encontrado" });
    }

    return res.json({ message: "Eliminado correctamente" });
  } catch (error) {
    return res.status(500).json({ message: "Error servidor" });
  }
};