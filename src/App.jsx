import React from "react";
import { useGlobal } from "./components/Context";
import MoneyBar from "./components/MoneyBar";
import MoneyYouGot from "./components/MoneyYouGot";
import Questions from "./components/Questions";
import Start from "./components/Start";
import Audio from "./components/Audio";
import Canvas from "./components/Canvas";
const App = () => {
  const { loading, container, earned, audio, canvas } = useGlobal();

  return (
    <>
      {canvas && <Canvas />}
      {audio && <Audio />}
      {loading && <Start />}
      {container && (
        <div className="container">
          <div className="questions_container">
            {earned ? <MoneyYouGot /> : <Questions />}
          </div>
          <MoneyBar />
        </div>
      )}
    </>
  );
};

export default App;
