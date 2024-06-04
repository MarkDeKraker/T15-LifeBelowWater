import swaggerJsDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Quiz API",
      version: "1.0.0",
      description: "A simple Express Quiz API",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`,
      },
    ],
  },
  apis: [
    "./routes/*/*.js",
    "./api/index.js",
    "./settings/swagger.js",
    "./controllers/*.js",
  ],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

export default swaggerDocs;
