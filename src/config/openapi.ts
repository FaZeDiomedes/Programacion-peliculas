import swaggerJsdoc from "swagger-jsdoc";

console.log("SERVER_URL:", process.env.SERVER_URL);

export const openApiSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Api Peliculas",
      version: "1.0.0",
      description: "Api de peliculas",
    },

    servers: [
      {
        url: process.env.SERVER_URL || "http://localhost:3000",
        description: "Servidor",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: [
    process.env.NODE_ENV === "production"
      ? "dist/modules/**/*.routes.js"
      : "src/modules/**/*.routes.ts",
  ],
});