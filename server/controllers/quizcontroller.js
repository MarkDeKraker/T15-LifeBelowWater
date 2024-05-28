import Quiz from '../models/Quiz.js';

export class QuizController {
    // get all quizzes
    async getAllQuizzes(req, res) {
        try {
            // get all quizzes
            const quizzes = await Quiz.find();
            // return quizzes
            return res.status(200).json({
                quizzes
            });
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }

    // create quiz
async createQuiz(req, res) {
    try {
        const quiz = new Quiz(req.body);
        await quiz.save();
        return res.status(201).json({
            quiz
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}
}




