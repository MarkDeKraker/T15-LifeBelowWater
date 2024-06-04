import express from "express";

import { QuizController } from "../../controllers/quizcontroller.js";
import verifyToken from "../../middleware/verifyToken.js";

const router = express.Router();

const quizController = new QuizController();

router.get("/quiz", verifyToken, quizController.getAllQuizzes);
router.get("/quiz/:_id", verifyToken, quizController.getQuizById);
router.get("/quiz/password/:password", quizController.getQuizByPassword);
router.get("/quiz/slug/:slug", quizController.getQuizBySlug);
router.post("/quiz", verifyToken, quizController.createQuiz);
router.put("/quiz/:_id", verifyToken, quizController.updateQuiz);
router.delete("/quiz/:_id", verifyToken, quizController.deleteQuiz);

router.post("/quiz", verifyToken, quizController.generateQuestion);

export default router;
