import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wait from "../sounds/wait.mp3";
import wrong from "../sounds/wrong.mp3";
const Ctx = createContext();
const url = "https://opentdb.com/api.php?amount=15&type=multiple";
const AppProvider = ({ children }) => {
  const money = [
    { id: 1, amount: "$100" },
    { id: 2, amount: "$200" },
    { id: 3, amount: "$300" },
    { id: 4, amount: "$500" },
    { id: 5, amount: "$1000" },
    { id: 6, amount: "$2000" },
    { id: 7, amount: "$4000" },
    { id: 8, amount: "$8000" },
    { id: 9, amount: "$16000" },
    { id: 10, amount: "$32000" },
    { id: 11, amount: "$64000" },
    { id: 12, amount: "$125000" },
    { id: 13, amount: "$250000" },
    { id: 14, amount: "$500000" },
    { id: 15, amount: "$1000000" },
  ];
  const [name, setName] = useState("");
  const [question, setQuestion] = useState(0);
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [container, setContainer] = useState(false);
  const [counter, setCounter] = useState(null);
  const [earned, setEarned] = useState(false);
  const [audio, setAudio] = useState(null);
  const [canvas, setCanvas] = useState(false);
  const getData = async (easy) => {
    try {
      setLoading(false);
      setEarned(false);
      const response = await fetch(url);
      const data = await response.json();
      setContainer(true);
      setQuestions(
        data.results.map(({ question, correct_answer, incorrect_answers }) => {
          return { question, correct_answer, incorrect_answers };
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  const nameHandler = (eo) => {
    setName(eo.target.value);
  };
  const startHandler = () => {
    if (name.trim()) {
      getData();
      setCounter(30);
      setAudio(play);
      setTimeout(() => {
        setAudio(wait);
      }, 4000);
    } else {
      alert("please enter your name");
    }
  };
  const nextQuestion = (eo) => {
    const answer = eo.target.textContent;
    if (answer === questions[question].correct_answer) {
      eo.target.className = "sugg correct";
      setTimeout(() => {
        setAudio(correct);
      }, 2000);
      setTimeout(() => {
        setQuestion((i) => {
          if (i === money.length - 1) {
            return (i = 0);
          }
          return i + 1;
        });
        eo.target.className = "sugg";
        setCounter(30);
        setAudio(wait);
      }, 5000);
    }
    if (answer !== questions[question].correct_answer) {
      eo.target.className = "sugg wrong";
      setTimeout(() => {
        setAudio(wrong);
      }, 2000);
      setTimeout(() => {
        setEarned(true);
        eo.target.className = "sugg";
        setCounter(null);
      }, 3000);
    }
  };
  const repeatHandler = () => {
    setCounter(null);
    setContainer(false);
    setEarned(false);
    setLoading(true);
    setName("");
    setAudio(null);
    setQuestion(0);
    setQuestions([]);
  };
  useEffect(() => {
    // const stop = setInterval(() => {
    //   setCounter((i) => i - 1);
    // }, 1000);
    if (counter <= 0) {
      clearInterval(stop);
      setEarned(true);
    }
    if (counter === 0) {
      setAudio(wrong);
    }
    return () => clearInterval(stop);
  }, [counter]);
  useEffect(() => {
    if (question > 0 && earned) {
      setCanvas(true);
    } else {
      setCanvas(false);
    }
  }, [earned]);
  return (
    <Ctx.Provider
      value={{
        nextQuestion,
        container,
        loading,
        money,
        questions,
        question,
        startHandler,
        counter,
        earned,
        nameHandler,
        name,
        audio,
        repeatHandler,
        canvas,
      }}
    >
      {children}
    </Ctx.Provider>
  );
};
export const useGlobal = () => {
  return useContext(Ctx);
};
export { AppProvider };
