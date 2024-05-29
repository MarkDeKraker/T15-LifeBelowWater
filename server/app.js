import chalk from "chalk";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";

import adminRoutes from "./routes/admins/admins.js";
import authRoutes from "./routes/auth/authentication.js";
import quizRoutes from "./routes/quiz/http.js";
import swaggerDocs from "./settings/swagger.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}

console.log(
  chalk.black.bold("NODE_ENV:"),
  chalk.bgRedBright.bold(process.env.NODE_ENV)
);

const uri = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`;
const port = process.env.PORT || 3000;

mongoose
  .connect(uri)
  .then(() => console.log(chalk.magenta.bold("Connected to MongoDB")))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - Welcome
 *     summary: Returns the welcome message
 *     responses:
 *       200:
 *         description: The welcome message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Welcome to the Quiz Api
 *               required:
 *                 - message
 */
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Quiz Api" });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/admins", adminRoutes);
app.use("/api/v1", quizRoutes);

app.listen(port, () => {
  console.log(`Server runs on port ${chalk.yellowBright(port)}`);
  console.log(
    chalk.blueBright.underline.bold(`http://localhost:${port}/api-docs`)
  );
});
