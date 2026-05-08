import { Request, Response } from "express";

import {
  addReview,
  getReviews,
  getReviewsByMovie,
  getReviewById,
  updateReview,
  deleteReview,
} from "./reviews.service";

// Crear reseña
export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      userId,
      movieId,
      comment,
      rating,
    } = req.body;

    if (
      !userId ||
      !movieId ||
      !comment ||
      !rating
    ) {
      return res.status(400).json({
        message: "Faltan datos",
      });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        message: "Rating debe ser 1 a 5",
      });
    }

    const review = await addReview(
      userId,
      movieId,
      comment,
      rating
    );

    return res.status(201).json(review);
  } catch (error) {
    return res.status(500).json({
      message: "Error servidor",
    });
  }
};

// Obtener todas
export const list = async (
  req: Request,
  res: Response
) => {
  try {
    const reviews = await getReviews();

    return res.json(reviews);
  } catch (error) {
    return res.status(500).json({
      message: "Error servidor",
    });
  }
};

// Obtener por película
export const listByMovie = async (
  req: Request,
  res: Response
) => {
  try {
    const movieId = req.params.movieId as string;

    const reviews =
      await getReviewsByMovie(movieId);

    return res.json(reviews);
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

    const review = await getReviewById(id);

    if (!review) {
      return res.status(404).json({
        message: "Reseña no encontrada",
      });
    }

    return res.json(review);
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

    if (
      req.body.rating &&
      (req.body.rating < 1 ||
        req.body.rating > 5)
    ) {
      return res.status(400).json({
        message: "Rating debe ser 1 a 5",
      });
    }

    const updated = await updateReview(
      id,
      req.body
    );

    if (!updated) {
      return res.status(404).json({
        message: "Reseña no encontrada",
      });
    }

    return res.json({
      message: "Reseña actualizada",
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

    const deleted = await deleteReview(id);

    if (!deleted) {
      return res.status(404).json({
        message: "Reseña no encontrada",
      });
    }

    return res.json({
      message: "Reseña eliminada",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error servidor",
    });
  }
};