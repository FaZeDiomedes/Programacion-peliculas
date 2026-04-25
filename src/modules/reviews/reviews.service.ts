import { getDb } from "../../config/database";


// Agregar reseña
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

  const result = await db.collection("reviews").insertOne(review);

  return { id: result.insertedId, ...review };
};

// Ver reseñas por película
export const getReviewsByMovie = async (movieId: string) => {
  const db = getDb();

  return await db
    .collection("reviews")
    .find({ movieId })
    .sort({ createdAt: -1 })
    .toArray();
};