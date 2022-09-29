import React from "react";
import { useGlobal } from "./Context";

const MoneyBar = () => {
  const { money, question } = useGlobal();
  return (
    <div className="money_container">
      <ol>
        {money.map((item, index) => {
          return <li className={question === index ? "active" : null} key={item.id}>{item.amount}</li>;
        })}
      </ol>
    </div>
  );
};

export default MoneyBar;
