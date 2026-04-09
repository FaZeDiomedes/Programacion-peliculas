import { Pelicula } from "./peliculas.model";
import { getDb } from "../../config/database";

export const PeliculasRepository = {
    async crear(pelicula: Pelicula) {
        const db = getDb();
        const result = await db.collection("peliculas").insertOne(pelicula);
        return { ...pelicula, _id: result.insertedId };
    },

    async obtenerTodas() {
        const db = getDb();
        return await db.collection("peliculas").find().toArray();
    }
};