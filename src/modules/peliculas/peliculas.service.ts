import { PeliculasRepository } from "./peliculas.repository";

export const PeliculasService = {
  async crearPelicula(data: any) {
    return await PeliculasRepository.crear(data);
  },

  async obtenerPeliculas() {
    return await PeliculasRepository.obtenerTodas();
  },

  async obtenerPeliculaPorId(id: string) {
    return await PeliculasRepository.obtenerPorId(id);
  },

  async actualizarPelicula(
    id: string,
    data: any
  ) {
    return await PeliculasRepository.actualizar(
      id,
      data
    );
  },

  async eliminarPelicula(id: string) {
    return await PeliculasRepository.eliminar(id);
  },
};