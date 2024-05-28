import Quiz from '../models/Quiz.js';

export class QuizController {
    // get all quizzes
    /**
 * @swagger
 * /api/v1/quiz:
 *   get:
 *     summary: Retrieve a list of quizzes
 *     security:
 *       - bearerAuth: []
 *     tags: [Quizzes]
 *     responses:
 *       200:
 *         description: A list of quizzes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Quiz'
 *       500:
 *         description: Server error
 */
    async getAllQuizzes(req, res) {
        try {
            const quizzes = await Quiz.find();
            if (!quizzes) {
                return res.status(404).json({
                    message: 'No quizzes found'
                });
            }
            return res.status(200).json({
                quizzes,
                totalQuizzes: quizzes.length
            });
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }

    // get quiz by id
    /**
 * @swagger
 * /api/v1/quiz/{id}:
 *   get:
 *     summary: Get a quiz by ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Quizzes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The quiz ID
 *     responses:
 *       200:
 *         description: The quiz data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quiz'
 *       404:
 *         description: Quiz not found
 *       500:
 *         description: Server error
 */
    async getQuizById(req, res) {
        try {
            if (!req.params._id) {
                return res.status(400).json({
                    message: 'Quiz _id is required'
                });
            }
            const quiz = await Quiz.findById(req.params._id);
            if (!quiz) {
                return res.status(404).json({
                    message: 'Quiz not found'
                });
            }
            return res.status(200).json({
                quiz
            });
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }

    // create quiz
    /**
 * @swagger
 * /api/v1/quiz:
 *   post:
 *     summary: Create a new quiz
 *     security:
 *       - bearerAuth: []
 *     tags: [Quizzes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Quiz'
 *     responses:
 *       201:
 *         description: The created quiz
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quiz'
 *       500:
 *         description: Server error
 */
async createQuiz(req, res) {
    try {
        if (!req.body.slug || !req.body.title || !req.body.password || !req.body.questions || !req.body.totalQuestions) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }

        // check if quiz with title, slug or password exists
        const quizExists = await Quiz.findOne({
            $or: [
                { title: req.body.title },
                { slug: req.body.slug },
                { password: req.body.password }
            ]
        });

        if (quizExists) {
            return res.status(400).json({
                message: 'Quiz with title, slug or password already exists'
            });
        }


        const quiz = new Quiz(req.body);
        await quiz.save();
        return res.status(201).json({
            quiz,
            message: 'Quiz created successfully'
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}

// update quiz
/**
 * @swagger
 * /api/v1/quiz/{id}:
 *   put:
 *     summary: Update a quiz
 *     security:
 *       - bearerAuth: []
 *     tags: [Quizzes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The quiz ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Quiz'
 *     responses:
 *       200:
 *         description: The updated quiz
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quiz'
 *       500:
 *         description: Server error
 */
async updateQuiz(req, res) {
    try {
        if (!req.params._id) {
            return res.status(400).json({
                message: 'Quiz _id is required'
            });
        }

        if (!req.body.slug || !req.body.title || !req.body.password || !req.body.questions || !req.body.totalQuestions) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }

        // check if quiz with title, slug or password exists
        const quizExists = await Quiz.findOne({
            $or: [
                { title: req.body.title },
                { slug: req.body.slug },
                { password: req.body.password }
            ]
        });

        if (quizExists) {
            return res.status(400).json({
                message: 'Quiz with title, slug or password already exists'
            });
        }

        const quiz = await Quiz.findByIdAndUpdate(req.params._id, req.body, { new: true });
        console.log(quiz);
        return res.status(200).json({
            quiz,
            message: 'Quiz updated successfully'
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
 }

// delete quiz
/**
 * @swagger
 * /api/v1/quiz/{id}:
 *   delete:
 *     summary: Delete a quiz
 *     security:
 *       - bearerAuth: []
 *     tags: [Quizzes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The quiz ID
 *     responses:
 *       200:
 *         description: Quiz deleted successfully
 *       400:
 *         description: Quiz _id is required
 *       500:
 *         description: Server error
 */
async deleteQuiz(req, res) {
    try {
        if (!req.params._id) {
            return res.status(400).json({
                message: 'Quiz _id is required'
            });
        }
            await Quiz.findByIdAndDelete(req.params._id);
        return res.status(200).json({
            message: 'Quiz deleted successfully'
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            message: 'Quiz not found'
        });
    }
}
}




