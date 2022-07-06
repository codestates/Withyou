import React from "react";
import useTextOnCanvas from "./TextOnCanvas.hook";

export default function TextOnCanvas({
  id,
  style,
  textStyle,
  textSize,
  textColor,
  ...rest
}) {
  const { models, operations } = useTextOnCanvas(rest);
  const { currentText } = models;

  return (
    <div
      key={id}
      id={id}
      contentEditable={true}
      placeholder={currentText}
      style={{
        ...style,
        fontFamily: textStyle,
        fontSize: textSize,
        color: textColor,
      }}
      className="text-element"
      draggable={false}
      {...operations}
    >
      {currentText}
    </div>
  );
}
