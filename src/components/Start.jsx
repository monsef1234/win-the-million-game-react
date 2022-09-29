import React from "react";
import { useGlobal } from "./Context";

const Start = () => {
  const { startHandler, nameHandler, name } = useGlobal();
  return (
    <div className="start_container">
      <input
        value={name}
        onChange={nameHandler}
        type="text"
        name="name"
        id="name"
        placeholder="please enter your name"
        autoComplete="off"
      />
      <button type="submit" onClick={startHandler}>
        start
      </button>
    </div>
  );
};

export default Start;
