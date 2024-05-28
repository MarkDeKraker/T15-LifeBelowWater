import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
  answer: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
}, { _id: false });

const questionSchema = new mongoose.Schema({
  id: { type: String, required: true },
  question: { type: String, required: true },
  answers: {
    A: answerSchema,
    B: answerSchema,
    C: answerSchema,
    D: answerSchema,
  },
}, { _id: false });

const quizSchema = new mongoose.Schema({
  slug: { type: String, required: true },
  title: { type: String, required: true },
  password: { type: String, required: true },
  questions: [questionSchema],
  totalQuestions: { type: Number, required: true },
});

export default mongoose.model('Quiz', quizSchema);