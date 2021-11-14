const questions = [
  {
    _id: "5b21ca3eeb7f6fbccd471801",
    question: "Which Country make best quality fabric?",
    choices: [
      { choice: "Pakistan", isCorrect: true },
      { choice: "America", isCorrect: false },
      { choice: "China", isCorrect: false },
      { choice: "France", isCorrect: false },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471802",
    question: "Which country produces best palm oil?",
    choices: [
      { choice: "Malaysia", isCorrect: true },
      { choice: "America", isCorrect: false },
      { choice: "China", isCorrect: false },
      { choice: "Pakistan", isCorrect: false },
    ],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471803",
    question: "Capital of Pakistan?",
    choices: [
      { choice: "Islamabad", isCorrect: true },
      { choice: "Lahore", isCorrect: false },
      { choice: "Multan", isCorrect: false },
      { choice: "Karachi", isCorrect: false },
    ],
  },
];

export function getQuestions() {
  return questions;
}
