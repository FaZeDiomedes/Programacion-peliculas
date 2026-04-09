import { z } from "zod";

export const crearPeliculaSchema = z.object({
    nombre: z.string().min(1),
    año: z.number().int().min(1900),
    genero: z.string().min(1)
});