import React from "react";
import { useGlobal } from "./Context";

const MoneyYouGot = () => {
  const { question, money, repeatHandler, name } = useGlobal();
  return (
    <div
      className="earned_contaier"
      style={{ alignSelf: "center", textAlign: "center", position: "relative" }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.8rem",
        }}
      >
        {name} earned {question === 0 ? "0 $" : money[question - 1].amount}
      </div>
      <button
        onClick={repeatHandler}
        style={{
          background: "transparent",
          color: "white",
          padding: ".5rem 1rem",
          cursor: "pointer",
          fontSize: "1.8rem",
          border: "2px solid ",
          borderRadius: ".5rem",
        }}
      >
        Repeat
      </button>
    </div>
  );
};

export default MoneyYouGot;
