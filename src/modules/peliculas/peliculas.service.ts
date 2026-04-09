import { PeliculasRepository } from "./peliculas.repository";

export const PeliculasService = {
    async crearPelicula(data: any) {
        return await PeliculasRepository.crear(data);
    },

    async obtenerPeliculas() {
        return await PeliculasRepository.obtenerTodas();
    }
};