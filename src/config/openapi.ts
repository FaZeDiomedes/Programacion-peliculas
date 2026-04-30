import swaggerJsdoc from "swagger-jsdoc";
import path from "path"

export const openApiSpec = swaggerJsdoc ({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api Peliculas",
      version: "1.0.0",
      description: "Api de peliculas",
    },
  },
  servers: [
    {
      url: "http://localhost:3000/api/v1",
      description: "Api de peliculas",
    },
  ],
  //apis: ["./src/modules/**/*.routes.ts"],
  apis: ["./src/modules/**/*.routes.ts"],
})
