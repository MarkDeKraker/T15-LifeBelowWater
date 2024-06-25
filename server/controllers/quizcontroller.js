import Quiz from "../models/Quiz.js";
import AIModel from "../settings/openAI.js";
import { PromptTemplate } from '@langchain/core/prompts';
import { JsonOutputFunctionsParser } from "langchain/output_parsers";
import topicContentMap from "../AIcontent/topicContentMap.js";
import { v4 as uuidv4 } from "uuid";

const { model } = AIModel;

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
          message: "No quizzes found",
        });
      }
      return res.status(200).json({
        quizzes,
        totalQuizzes: quizzes.length,
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
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
          message: "Quiz _id is required",
        });
      }
      const quiz = await Quiz.findById(req.params._id);
      if (!quiz) {
        return res.status(404).json({
          message: "Quiz not found",
        });
      }
      return res.status(200).json({
        quiz,
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }

  // get quiz by password
  /**
   * @swagger
   * /api/v1/quiz/{password}:
   *   get:
   *     summary: Get a quiz by Password
   *     security:
   *       - bearerAuth: []
   *     tags: [Quizzes]
   *     parameters:
   *       - in: path
   *         name: password
   *         schema:
   *           type: string
   *         required: true
   *         description: The quiz password
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
  async getQuizByPassword(req, res) {
    try {
      if (!req.params.password) {
        return res.status(400).json({
          message: "password is required",
        });
      }
      const quiz = await Quiz.find({ password: req.params.password });
      if (!quiz) {
        return res.status(404).json({
          message: "Quiz not found",
        });
      }
      return res.status(200).json({
        quiz,
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }

  // get quiz by slug
  /**
   * @swagger
   * /api/v1/quiz/{slug}:
   *   get:
   *     summary: Get a quiz by slug
   *     security:
   *       - bearerAuth: []
   *     tags: [Quizzes]
   *     parameters:
   *       - in: path
   *         name: slug
   *         schema:
   *           type: string
   *         required: true
   *         description: The quiz slug
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
  async getQuizBySlug(req, res) {
    try {
      if (!req.params.slug) {
        return res.status(400).json({
          message: "Quiz slug is required",
        });
      }
      const quiz = await Quiz.find({ slug: req.params.slug });
      if (!quiz) {
        return res.status(404).json({
          message: "Quiz not found",
        });
      }
      return res.status(200).json({
        quiz,
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
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
      if (
        !req.body.slug ||
        !req.body.title ||
        !req.body.password ||
        !req.body.questions ||
        !req.body.totalQuestions
      ) {
        return res.status(400).json({
          message: "All fields are required",
        });
      }

      // check if quiz with title, slug or password exists
      const quizExists = await Quiz.findOne({
        $or: [
          { title: req.body.title },
          { slug: req.body.slug },
          { password: req.body.password },
        ],
      });

      if (quizExists) {
        return res.status(400).json({
          message: "Quiz with title, slug or password already exists",
        });
      }

      const quiz = new Quiz(req.body);
      await quiz.save();
      return res.status(201).json({
        quiz,
        message: "Quiz created successfully",
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
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
          message: "Quiz _id is required",
        });
      }

      if (
        !req.body.slug ||
        !req.body.title ||
        !req.body.password ||
        !req.body.questions ||
        !req.body.totalQuestions
      ) {
        return res.status(400).json({
          message: "All fields are required",
        });
      }

      // check if quiz with title, slug or password exists
      // this excludes the current quiz that is being updated
      const quizExists = await Quiz.findOne({
        $and: [
          { _id: { $ne: req.params._id } },
          {
            $or: [
              { title: req.body.title },
              { slug: req.body.slug },
              { password: req.body.password },
            ],
          },
        ],
      });

      if (quizExists) {
        return res.status(400).json({
          message: "Quiz with title, slug or password already exists",
        });
      }

      const quiz = await Quiz.findByIdAndUpdate(req.params._id, req.body, {
        new: true,
      });
      console.log(quiz);
      return res.status(200).json({
        quiz,
        message: "Quiz updated successfully",
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
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
          message: "Quiz _id is required",
        });
      }
      await Quiz.findByIdAndDelete(req.params._id);
      return res.status(200).json({
        message: "Quiz deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
        message: "Quiz not found",
      });
    }
  }

  // generate quiz question
  /**
   * @swagger
   * /api/v1/quiz/generate:
   *   post:
   *     summary: Generate a quiz question
   *     tags: [Quizzes]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               topic:
   *                 type: string
   *                 description: The topic for the quiz question
   *                 example: plasticvervuiling
   *     responses:
   *       200:
   *         description: Quiz question generated successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 question:
   *                   type: string
   *                 answers:
   *                   type: array
   *                   items:
   *                     type: object
   *                     properties:
   *                       _id:
   *                         type: string
   *                       answer:
   *                         type: string
   *                       isCorrect:
   *                         type: boolean
   *       400:
   *         description: Bad request
   *       500:
   *         description: Server error
   */

  async generateQuestion(req, res) {
    try {

      const { topic } = req.body;

      if (!topic) {
        return res.status(400).json({
          message: "Topic is required",
        });
      }

      const content = topicContentMap[topic];
        if (!content) {
            return res.status(400).json({
                message: "Invalid topic provided",
            });
        }

      const system = `Je bent een basisschool docent voor groep 7 en 8. Verwoord je antwoorden op een manier dat het begrijpelijk is voor kinderen van 10 tot 12 jaar oud. Hier is wat informatie over ${topic}: ${content}`;

      const engineeredPrompt = `{ Kun je mij een quizvraag geven over ${topic}? Een vraag heeft drie foute antwoorden en één goed antwoord. Geef het antwoord in het volgende JSON formaat en wijk er niet van af. Stuur alleen de json terug. NO YAPPING:
        {
          _id: ${uuidv4()}
          question: "",
          answers: [
            { _id: "A", answer: "", isCorrect: true },
            { _id: "B", answer: "", isCorrect: false },
            { _id: "C", answer: "", isCorrect: false },
            { _id: "D", answer: "", isCorrect: false },
          ],
        },    
      }`;

      console.log(engineeredPrompt);

      const parser = new JsonOutputFunctionsParser({ argsOnly: false });
      const maxRetries = 5;
      let attempt = 0;
      let validResponse = false;
      let parsedResponse = null;

      while (attempt < maxRetries && !validResponse) {
        try {
          attempt++;
          const response = await model.invoke([
            ["system", system],
            ["user", engineeredPrompt]
          ], {
            outputParser: parser,
          });

          console.log(`Attempt ${attempt}: Raw response:`, response.content);

          // Try to parse the JSON response
          parsedResponse = JSON.parse(response.content);
          validResponse = true; // If parsing succeeds, break the loop    
          // console.log(response.content, typeof response.content);
          console.log("Parsed response:", parsedResponse, typeof parsedResponse);
        } catch (parseError) {
          console.error(`Attempt ${attempt}: Failed to parse response. Retrying...`, parseError);
        }
      }

      if (validResponse && parsedResponse) {
        return res.status(200).json({ response: parsedResponse, message: "Quiz question generated successfully" });
      } else {
        return res.status(500).json({
          message: "Failed to generate quiz question after multiple attempts",
        });
      }
    } catch (error) {
      console.error("Error invoking the model:", error);
      return res.status(500).json({
        error: error.message,
        message: "Server error",
      });
    }
  };

}


async function applyPromptEngineering(json) {
  const promptEngineeringTemplate = new PromptTemplate({
    inputVariables: ["json"],
    template:
      "Is this a valid json?: '{json}'.If not make it a valid json. Only send the valid json back.",
  });
  // ? like a treasure full of knowledge Dungeons and Dragons 5e questions

  try {
    // Generate the prompt using the question asked by the user
    const prompt = await promptEngineeringTemplate.format({ json });

    // Ask the model to improve the question
    const improvedQuestion = await model.invoke(prompt);

    // Return the improved question
    return improvedQuestion.content;
  } catch (error) {
    console.error(
      "An error occurred while applying prompt engineering:",
      error
    );
    // In case of an error, return the original question
    return question;
  }
}

