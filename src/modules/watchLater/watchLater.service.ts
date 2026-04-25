import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";

// Agregar a ver más tarde
export const addWatchLater = async (userId: string, movieId: string) => {
  const db = getDb();

  const item = {
    userId,
    movieId,
    createdAt: new Date(),
  };

  const result = await db.collection("watch_later").insertOne(item);

  return { id: result.insertedId, ...item };
};

// Ver lista del usuario
export const getWatchLaterByUser = async (userId: string) => {
  const db = getDb();

  return await db.collection("watch_later").find({ userId }).toArray();
};

// Eliminar de lista
export const removeWatchLater = async (userId: string, movieId: string) => {
  const db = getDb();

  const result = await db.collection("watch_later").deleteOne({
    userId,
    movieId,
  });

  return result.deletedCount > 0;
};