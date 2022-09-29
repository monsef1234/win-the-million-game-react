import React from "react";
import { useGlobal } from "./Context";

const Audio = () => {
  const { audio } = useGlobal();
  return <audio src={audio} autoPlay={audio ? true : false}></audio>;
};

export default Audio;
