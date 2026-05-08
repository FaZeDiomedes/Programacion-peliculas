import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";

// Agregar a ver más tarde
export const addWatchLater = async (
  userId: string,
  movieId: string
) => {
  const db = getDb();

  const item = {
    userId,
    movieId,
    createdAt: new Date(),
  };

  const result = await db
    .collection("watch_later")
    .insertOne(item);

  return {
    id: result.insertedId,
    ...item,
  };
};

// Obtener todas las listas
export const getAllWatchLater = async () => {
  const db = getDb();

  return await db
    .collection("watch_later")
    .find()
    .sort({ createdAt: -1 })
    .toArray();
};

// Obtener lista por usuario
export const getWatchLaterByUser = async (
  userId: string
) => {
  const db = getDb();

  return await db
    .collection("watch_later")
    .find({ userId })
    .toArray();
};

// Obtener item por ID
export const getWatchLaterById = async (
  id: string
) => {
  const db = getDb();

  return await db
    .collection("watch_later")
    .findOne({
      _id: new ObjectId(id),
    });
};

// Actualizar item
export const updateWatchLater = async (
  id: string,
  data: any
) => {
  const db = getDb();

  const result = await db
    .collection("watch_later")
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

// Eliminar item
export const removeWatchLater = async (
  id: string
) => {
  const db = getDb();

  const result = await db
    .collection("watch_later")
    .deleteOne({
      _id: new ObjectId(id),
    });

  return result.deletedCount > 0;
};