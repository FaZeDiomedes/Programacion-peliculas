import { ObjectId } from "mongodb";
import { Pelicula } from "./peliculas.model";
import { getDb } from "../../config/database";

export const PeliculasRepository = {
  async crear(pelicula: Pelicula) {
    const db = getDb();

    const result = await db
      .collection("peliculas")
      .insertOne(pelicula);

    return {
      ...pelicula,
      _id: result.insertedId,
    };
  },

  async obtenerTodas() {
    const db = getDb();

    return await db
      .collection("peliculas")
      .find()
      .toArray();
  },

  async obtenerPorId(id: string) {
    const db = getDb();

    return await db
      .collection("peliculas")
      .findOne({
        _id: new ObjectId(id),
      });
  },

  async actualizar(
    id: string,
    data: Partial<Pelicula>
  ) {
    const db = getDb();

    const result = await db
      .collection("peliculas")
      .updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: data,
        }
      );

    return result.modifiedCount > 0;
  },

  async eliminar(id: string) {
    const db = getDb();

    const result = await db
      .collection("peliculas")
      .deleteOne({
        _id: new ObjectId(id),
      });

    return result.deletedCount > 0;
  },
};