import React from "react";
import { useGlobal } from "./Context";

const Questions = () => {
  const { question, questions, nextQuestion, counter } = useGlobal();
  const {
    question: qst,
    correct_answer,
    incorrect_answers,
  } = questions[question];
  const suggestions = [...incorrect_answers, correct_answer].sort();
  return (
    <>
      <div className="countdown">
        <span>{counter}</span>
      </div>
      <div className="questions">
        <div className="question">
          <h2 dangerouslySetInnerHTML={{ __html: qst }}></h2>
        </div>
        <div className="suggestions">
          {suggestions.map((sugg, index) => {
            return (
              <h3
                onClick={nextQuestion}
                className="sugg"
                key={index}
                dangerouslySetInnerHTML={{ __html: sugg }}
              ></h3>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Questions;
