import express from 'express';

import { QuizController } from '../../controllers/quizcontroller.js';

const router = express.Router();

const quizController = new QuizController();

router.get('/quiz', quizController.getAllQuizzes);
// router.get('/address/:id', addressController.getAddressById);
router.post('/quiz', quizController.createQuiz);
// router.put('/address/:id', addressController.updateAddress);
// router.delete('/address/:id', addressController.deleteAddress);

export default router;
