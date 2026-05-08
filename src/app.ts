import express from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import v1Routes from "./api/v1/index";
import { errorMiddleware } from "./middlewares/error.middleware";
import peliculasRoutes from "./modules/peliculas/peliculas.routes";
import reviewsRoutes from "./modules/reviews/reviews.routes";
import watchLaterRoutes from "./modules/watchLater/watchLater.routes";
import swaggerUi from "swagger-ui-express";
import { openApiSpec } from "./config/openapi";

export const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());


//Prueba de rutas app.ts
app.get('/saludar', (_req, res) => {
    res.json({"Saludar": "Hola"})
})

app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(openApiSpec));

app.use("/api/v1/peliculas", peliculasRoutes);
app.use("/api/v1", v1Routes);
app.use("/api/v1/watch-later", watchLaterRoutes);
app.use("/reviews", reviewsRoutes);

app.use(errorMiddleware);
