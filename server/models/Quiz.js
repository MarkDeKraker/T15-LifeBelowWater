import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
  {
    answer: { type: String, required: true },
    isCorrect: { type: Boolean, required: true },
    _id: { type: String, required: true },
  },
  { _id: false } // Disable _id for subdocuments
);

const questionSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answers: [answerSchema],
    _id: { type: String, required: true },
  },
  { _id: false } // it wasn't necessary to add this line, but I added it to be clear and consistent
);

const quizSchema = new mongoose.Schema({
  slug: { type: String, required: true },
  title: { type: String, required: true },
  password: { type: String, required: true },
  questions: [questionSchema],
  totalQuestions: { type: Number, required: true },
});

export default mongoose.model("Quiz", quizSchema);
