import { Request, Response } from "express";

import { PeliculasService } from "./peliculas.service";

import { crearPeliculaSchema } from "./peliculas.schema";

export const crearPelicula = async (
  req: Request,
  res: Response
) => {
  try {
    const data =
      crearPeliculaSchema.parse(req.body);

    const pelicula =
      await PeliculasService.crearPelicula(
        data
      );

    res.status(201).json(pelicula);
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const obtenerPeliculas = async (
  req: Request,
  res: Response
) => {
  const peliculas =
    await PeliculasService.obtenerPeliculas();

  res.json(peliculas);
};

export const obtenerPeliculaPorId = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params.id as string;

    const pelicula =
      await PeliculasService.obtenerPeliculaPorId(
        id
      );

    if (!pelicula) {
      return res.status(404).json({
        message: "Película no encontrada",
      });
    }

    res.json(pelicula);
  } catch (error) {
    res.status(500).json({
      message: "Error servidor",
    });
  }
};

export const actualizarPelicula = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params.id as string;

    const updated =
      await PeliculasService.actualizarPelicula(
        id,
        req.body
      );

    if (!updated) {
      return res.status(404).json({
        message: "Película no encontrada",
      });
    }

    res.json({
      message: "Película actualizada",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error servidor",
    });
  }
};

export const eliminarPelicula = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params.id as string;

    const deleted =
      await PeliculasService.eliminarPelicula(
        id
      );

    if (!deleted) {
      return res.status(404).json({
        message: "Película no encontrada",
      });
    }

    res.json({
      message: "Película eliminada",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error servidor",
    });
  }
};