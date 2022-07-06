import { useState } from "react";

function useTextProperty({ textStyle, modifyTextStyle }) {
  const [currentTextSyle, setCurrentTextSyle] = useState(textStyle);

  function onChangeTextStyle(e) {
    const nextState = e.target.value;
    setCurrentTextSyle(nextState);
    modifyTextStyle(nextState);
  }

  return {
    models: {
      currentTextSyle,
    },
    operations: {
      onChangeTextStyle,
    },
  };
}

export default useTextProperty;
