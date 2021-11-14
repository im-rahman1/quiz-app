import React, { useState } from "react";
import { getQuestions } from "../services/fakeQuestionService";
import "./question.css";

function Question() {
  const questions = getQuestions();

  let [currentQuestion, setCurrQuestion] = useState(0);
  let [checked, setChecked] = useState(false);
  let [isCorrect, setCorrect] = useState(false);
  let [score, setScore] = useState(0);
  let [showScore, setShowScore] = useState(false);
  let [i, seti] = useState(0);

  const doSubmit = (e) => {
    e.preventDefault();

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      // console.log("submit");
      setCurrQuestion(nextQuestion);
    } else if (nextQuestion === questions.length) {
      // console.log("end");
      setShowScore((showScore = true));
      console.log(showScore);
    }
  };

  const checkAnswer = () => {
    seti((i = i + 1));
    console.log(i);

    if (isCorrect) {
      setScore((score += 1));
    }
    // console.log(score);
  };

  return (
    <div>
      {showScore ? (
        <div className="showScore">
          <p>
            You Scored "{score}" out of "{questions.length}"
          </p>
        </div>
      ) : (
        <div className="quizContainer">
          <div className="quiz">
            <p>{questions[currentQuestion].question}</p>
            <form className="choices" onSubmit={(e) => doSubmit(e)}>
              {questions[currentQuestion].choices.map((c) => (
                <label
                  className="choice"
                  key={c.choice + i}
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
      )}
    </div>
  );
}

export default Question;
