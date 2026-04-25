import { Request, Response } from "express";
import { PeliculasService } from "./peliculas.service";
import { crearPeliculaSchema } from "./peliculas.schema";

export const crearPelicula = async (req: Request, res: Response) => {
    try {
        const data = crearPeliculaSchema.parse(req.body);
        const pelicula = await PeliculasService.crearPelicula(data);
        res.json(pelicula);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const obtenerPeliculas = async (req: Request, res: Response) => {
    const peliculas = await PeliculasService.obtenerPeliculas();
    res.json(peliculas);
};
