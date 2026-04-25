import { Request, Response } from "express";
import { addReview, getReviewsByMovie } from "./reviews.service";

// Agregar reseña
export const create = async (req: Request, res: Response) => {
  try {
    const { userId, movieId, comment, rating } = req.body;

    if (!userId || !movieId || !comment || !rating) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: "Rating debe ser 1 a 5" });
    }

    const review = await addReview(userId, movieId, comment, rating);

    return res.status(201).json(review);
  } catch (error) {
    return res.status(500).json({ message: "Error servidor" });
  }
};

// Ver reseñas por película
export const listByMovie = async (req: Request, res: Response) => {
  try {
    const movieId = req.params.movieId as string;

    const reviews = await getReviewsByMovie(movieId);

    return res.json(reviews);
  } catch (error) {
    return res.status(500).json({ message: "Error servidor" });
  }
};