import { QuizList, QuizType } from "../../types/QuizType";

// Verwijder dit als je eigen data hebt toegevoegd
export const mockQuizzes: QuizList[] = [
  {
    _id: "665627cabcdd3ce976fb9db9a",
    title: "Test 1",
    password: "asdfasdf2",
  },
  {
    _id: "665627c541d33e976fb9db9a",
    title: "Test 2",
    password: "test23",
  },
];
// {
//   _id: "665627cabcdd3ce976fb9db9a",
//   slug: "test1",
//   title: "Test1",
//   password: "asdfasdf2",
//   questions: [
//     {
//       answers: {
//         A: {
//           answer: "Answer A",
//           isCorrect: false,
//         },
//         B: {
//           answer: "Answer B",
//           isCorrect: true,
//         },
//         C: {
//           answer: "Answer C",
//           isCorrect: false,
//         },
//         D: {
//           answer: "Answer D",
//           isCorrect: false,
//         },
//       },
//       question: "Test question 1?",
//       _id: "665627c541d3ce976fb9db9b",
//     },
//     {
//       answers: {
//         A: {
//           answer: "Answer A",
//           isCorrect: false,
//         },
//         B: {
//           answer: "Answer B",
//           isCorrect: false,
//         },
//         C: {
//           answer: "Answer C",
//           isCorrect: true,
//         },
//         D: {
//           answer: "Answer D",
//           isCorrect: false,
//         },
//       },
//       question: "Test question 2?",
//       _id: "665627c541d3ce976fb9db9c",
//     },
//   ],
//   totalQuestions: 2,
//   __v: 0,
// },
// {
//   _id: "665627c541d3ce976fb9db9a",
//   slug: "test",
//   title: "Test",
//   password: "asdfasdf",
//   questions: [
//     {
//       answers: {
//         A: {
//           answer: "Answer A",
//           isCorrect: false,
//         },
//         B: {
//           answer: "Answer B",
//           isCorrect: true,
//         },
//         C: {
//           answer: "Answer C",
//           isCorrect: false,
//         },
//         D: {
//           answer: "Answer D",
//           isCorrect: false,
//         },
//       },
//       question: "Test question 1?",
//       _id: "665627c541d3ce976fb9db9b",
//     },
//     {
//       answers: {
//         A: {
//           answer: "Answer A",
//           isCorrect: false,
//         },
//         B: {
//           answer: "Answer B",
//           isCorrect: false,
//         },
//         C: {
//           answer: "Answer C",
//           isCorrect: true,
//         },
//         D: {
//           answer: "Answer D",
//           isCorrect: false,
//         },
//       },
//       question: "Test question 2?",
//       _id: "665627c541d3ce976fb9db9c",
//     },
//   ],
//   totalQuestions: 2,
//   __v: 0,
// },
// ];

// const postNewQuiz = () => {
//   const payload = {
//     slug: "kipp",
//     title: "kipp",
//     password: "kipp",
//     questions: [
//       {
//         answers: {
//           A: {
//             answer: "Answer A",
//             isCorrect: false,
//           },
//           B: {
//             answer: "Answer B",
//             isCorrect: true,
//           },
//           C: {
//             answer: "Answer C",
//             isCorrect: false,
//           },
//           D: {
//             answer: "Answer D",
//             isCorrect: false,
//           },
//         },
//         question: "Test question 1?",
//       },
//       {
//         answers: {
//           A: {
//             answer: "Answer A",
//             isCorrect: false,
//           },
//           B: {
//             answer: "Answer B",
//             isCorrect: false,
//           },
//           C: {
//             answer: "Answer C",
//             isCorrect: true,
//           },
//           D: {
//             answer: "Answer D",
//             isCorrect: false,
//           },
//         },
//         question: "Test question 2?",
//       },
//     ],
//     totalQuestions: 2,
//   };
//   axios
//     .post("http://localhost:3000/api/v1/quiz", payload, {
//       headers: {
//         Authorization: tokenForBearer(),
//       },
//     })
//     .then((response) => console.log(response.data))
//     .catch((error) => console.error("Error:", error));
// };
