import React, { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";

const Canvas = () => {
  const parent = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setWidth(parent.current.offsetWidth);
    setHeight(parent.current.offsetHeight);
  }, []);
  return (
    <div
      ref={parent}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "absolute",
        top: "0",
        left: "0",
      }}
    >
      <Confetti width={width} height={height} />
    </div>
  );
};

export default Canvas;
