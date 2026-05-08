import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";

// Crear reseña
export const addReview = async (
  userId: string,
  movieId: string,
  comment: string,
  rating: number
) => {
  const db = getDb();

  const review = {
    userId,
    movieId,
    comment,
    rating,
    createdAt: new Date(),
  };

  const result = await db
    .collection("reviews")
    .insertOne(review);

  return {
    id: result.insertedId,
    ...review,
  };
};

// Obtener todas las reseñas
export const getReviews = async () => {
  const db = getDb();

  return await db
    .collection("reviews")
    .find()
    .sort({ createdAt: -1 })
    .toArray();
};

// Obtener reseñas por película
export const getReviewsByMovie = async (
  movieId: string
) => {
  const db = getDb();

  return await db
    .collection("reviews")
    .find({ movieId })
    .sort({ createdAt: -1 })
    .toArray();
};

// Obtener reseña por ID
export const getReviewById = async (
  id: string
) => {
  const db = getDb();

  return await db
    .collection("reviews")
    .findOne({
      _id: new ObjectId(id),
    });
};

// Actualizar reseña
export const updateReview = async (
  id: string,
  data: any
) => {
  const db = getDb();

  const result = await db
    .collection("reviews")
    .updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: data,
      }
    );

  return result.modifiedCount > 0;
};

// Eliminar reseña
export const deleteReview = async (
  id: string
) => {
  const db = getDb();

  const result = await db
    .collection("reviews")
    .deleteOne({
      _id: new ObjectId(id),
    });

  return result.deletedCount > 0;
};