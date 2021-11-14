import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

return (
  <div className="quizContainer">
    <div className="quiz">
      <p key={questions[0]._id}>{questions[0].question}</p>
      <form className="choices">
        {questions[0].choices.map((c) => (
          <label className="choice" key={c.choice} onChange={handleChange}>
            <input type="radio" />
            {c.choice}
          </label>
        ))}
      </form>
      <Button label="Next" btnType="primary"></Button>
    </div>
  </div>
);

// return (
//   <div className="quizContainer">
//     <div className="quiz">
//       <p key={currentQuestion._id}>{currentQuestion.question}</p>
//       <form className="choices">
//         <label
//           className="choice"
//           key={currentQuestion.choices[0].choice}
//           onChange={handleChange}>
//           <input type="radio" />
//           {currentQuestion.choices[0].choice}
//         </label>
//         <label
//           className="choice"
//           key={currentQuestion.choices[1].choice}
//           onChange={handleChange}>
//           <input type="radio" />
//           {currentQuestion.choices[1].choice}
//         </label>
//         <label
//           className="choice"
//           key={currentQuestion.choices[2].choice}
//           onChange={handleChange}>
//           <input type="radio" />
//           {currentQuestion.choices[2].choice}
//         </label>
//         <label
//           className="choice"
//           key={currentQuestion.choices[3].choice}
//           onChange={handleChange}>
//           <input type="radio" />
//           {currentQuestion.choices[3].choice}
//         </label>
//       </form>
//       <Button label="Next" btnType="primary"></Button>
//     </div>
//   </div>
// );

function Question() {
  const questions = getQuestions();

  let [currentQuestion, setCurrQuestion] = useState(0);
  let [checked, setChecked] = useState(false);
  let [isCorrect, setCorrect] = useState(false);
  let [score, setScore] = useState(0);

  const doSubmit = (e) => {
    e.preventDefault();

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      // console.log("submit");
      setCurrQuestion(nextQuestion);
    } else if (nextQuestion === questions.length) {
      console.log("end");
    }
  };

  const checkAnswer = () => {
    if (isCorrect) {
      setScore((score += 1));
    }
    console.log(score);
  };

  return (
    <div className="quizContainer">
      <div className="quiz">
        <p>{questions[currentQuestion].question}</p>
        <form className="choices" onSubmit={(e) => doSubmit(e)}>
          {questions[currentQuestion].choices.map((c) => (
            <label
              className="choice"
              key={c.choice}
              value={c.choice}
              onClick={() => {
                setCorrect(c.isCorrect);
                setChecked(true);
              }}>
              <input type="radio" name="choices" />
              {c.choice}
            </label>
          ))}
          <button
            className={checked ? "btn" : "btn disabled"}
            onClick={() => checkAnswer()}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
