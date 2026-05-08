import { Request, Response } from "express";

import {
  addWatchLater,
  getAllWatchLater,
  getWatchLaterByUser,
  getWatchLaterById,
  updateWatchLater,
  removeWatchLater,
} from "./watchLater.service";

// Crear
export const add = async (
  req: Request,
  res: Response
) => {
  try {
    const { userId, movieId } = req.body;

    if (!userId || !movieId) {
      return res.status(400).json({
        message: "Faltan datos",
      });
    }

    const item = await addWatchLater(
      userId,
      movieId
    );

    return res.status(201).json(item);
  } catch (error) {
    return res.status(500).json({
      message: "Error servidor",
    });
  }
};

// Obtener todos
export const list = async (
  req: Request,
  res: Response
) => {
  try {
    const data =
      await getAllWatchLater();

    return res.json(data);
  } catch (error) {
    return res.status(500).json({
      message: "Error servidor",
    });
  }
};

// Obtener por usuario
export const listByUser = async (
  req: Request,
  res: Response
) => {
  try {
    const userId =
      req.params.userId as string;

    const data =
      await getWatchLaterByUser(
        userId
      );

    return res.json(data);
  } catch (error) {
    return res.status(500).json({
      message: "Error servidor",
    });
  }
};

// Obtener por ID
export const findById = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params.id as string;

    const item =
      await getWatchLaterById(id);

    if (!item) {
      return res.status(404).json({
        message:
          "Elemento no encontrado",
      });
    }

    return res.json(item);
  } catch (error) {
    return res.status(500).json({
      message: "Error servidor",
    });
  }
};

// Actualizar
export const update = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params.id as string;

    const updated =
      await updateWatchLater(
        id,
        req.body
      );

    if (!updated) {
      return res.status(404).json({
        message:
          "Elemento no encontrado",
      });
    }

    return res.json({
      message:
        "Actualizado correctamente",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error servidor",
    });
  }
};

// Eliminar
export const remove = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params.id as string;

    const deleted =
      await removeWatchLater(id);

    if (!deleted) {
      return res.status(404).json({
        message:
          "Elemento no encontrado",
      });
    }

    return res.json({
      message:
        "Eliminado correctamente",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error servidor",
    });
  }
};