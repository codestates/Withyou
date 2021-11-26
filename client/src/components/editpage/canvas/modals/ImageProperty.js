import React, { useState } from "react";
import "../../../../css/editpage/canvas/modals/ImageProperty.css";
export default function ImageProperty({
  type,
  width,
  resizeWidth,
  height,
  resizeHeight,
  transform,
  rotateObject,
  removeObject,
  zindex,
  modifyZindex,
  textSize,
  resizeTextSize,
  textColor,
  reSelectColor,
}) {
  const [currentWidth, setCurrentWidth] = useState(width);
  const [currentHeight, setCurrentHeight] = useState(height);
  const [currentRotate, setCurrentRotate] = useState(
    transform.slice(7).slice(0, -4)
  );
  const [currentZindex, setCurrentZindex] = useState(zindex);

  const [currentTextSize, setCurrentTextSize] = useState(textSize);
  const [currentTextColor, setCurrentTextColor] = useState(textColor);

  function increaseWidth() {
    const nextState = currentWidth + 5;
    setCurrentWidth(nextState);
    resizeWidth(nextState);
  }

  function decreaseWidth() {
    const nextState = currentWidth - 5;
    setCurrentWidth(nextState);
    resizeWidth(nextState);
  }

  function increaseHeight() {
    const nextState = currentHeight + 5;
    setCurrentHeight(nextState);
    resizeHeight(nextState);
  }

  function decreaseHeight() {
    const nextState = currentHeight - 5;
    setCurrentHeight(nextState);
    resizeHeight(nextState);
  }

  function rotateClockSide() {
    const nextState = String(+currentRotate + 10);
    setCurrentRotate(nextState);
    rotateObject(`rotate(${nextState}deg)`);
  }

  function rotateDeClockSide() {
    const nextState = String(+currentRotate - 10);
    setCurrentRotate(nextState);
    rotateObject(`rotate(${nextState}deg)`);
  }

  function increaseZindex() {
    const nextState = zindex + 1;
    setCurrentZindex(nextState);
    modifyZindex(nextState);
  }

  function decreaseZindex() {
    const nextState = zindex - 1;
    setCurrentZindex(nextState);
    modifyZindex(nextState);
  }

  function increaseTextSize() {
    const nextState = textSize + 1;
    setCurrentTextSize(nextState);
    resizeTextSize(nextState);
  }

  function decreaseTextSize() {
    const nextState = textSize - 1;
    setCurrentTextSize(nextState);
    resizeTextSize(nextState);
  }
  // TODO : 밑에 반복되는 버튼들을 함수화 하면 좋을것 같은데..
  if (type === "image") {
    return (
      <div id="property-modal">
        <div id="property-title-button">
          <div>Edit Detail</div>
          <button id="delete-button" onClick={() => removeObject()}>
            Delete
          </button>
        </div>
        <div id="control-box">
          <div id="control-width">
            <div>가로</div>
            <div className="button-area">
              <button className="resize-button" onClick={() => decreaseWidth()}>
                -
              </button>
              <input
                className="input-area"
                type="text"
                value={Math.floor(currentWidth)}
                onChange={(e) => {
                  setCurrentWidth(Number(e.target.value));
                  resizeWidth(Number(e.target.value));
                }}
              />
              <button className="resize-button" onClick={() => increaseWidth()}>
                +
              </button>
            </div>
          </div>
          <div id="control-height">
            <div>세로</div>
            <div className="button-area">
              <button
                className="resize-button"
                onClick={() => decreaseHeight()}
              >
                -
              </button>
              <input
                className="input-area"
                type="text"
                value={Math.floor(currentHeight)}
                onChange={(e) => {
                  setCurrentHeight(Number(e.target.value));
                  resizeHeight(Number(e.target.value));
                }}
              />
              <button
                className="resize-button"
                onClick={() => increaseHeight()}
              >
                +
              </button>
            </div>
          </div>
          <div id="control-rotate">
            <div>회전</div>
            <div className="button-area">
              <button
                className="rotate-button"
                onClick={() => rotateDeClockSide()}
              >
                -
              </button>
              <input
                className="input-area"
                type="text"
                value={Math.floor(currentRotate)}
                onChange={(e) => {
                  setCurrentRotate(Number(e.target.value));
                  rotateObject(`rotate(${Number(e.target.value)}deg)`);
                }}
              />
              <button
                className="rotate-button"
                onClick={() => rotateClockSide()}
              >
                +
              </button>
            </div>
          </div>
          <div id="control-zindex">
            <div>레이어</div>
            <div id="zindex-buttons">
              <button
                className="zindex-button"
                onClick={() => {
                  if (zindex !== 0) {
                    decreaseZindex(zindex - 1);
                  }
                }}
              >
                -
              </button>
              <input
                className="input-area"
                type="text"
                value={currentZindex}
                onChange={(e) => {
                  setCurrentZindex(e.target.value);
                  modifyZindex(e.target.value);
                }}
              />
              <button
                className="zindex-button"
                onClick={() => {
                  increaseZindex(zindex + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (type === "text") {
    return (
      <div id="property-modal">
        <div id="property-title-button">
          <div>Edit Detail</div>
          <button id="delete-button" onClick={() => removeObject()}>
            Delete
          </button>
        </div>
        <div id="control-box">
          <div id="control-style">
            <div>글꼴</div>
            <div className="button-area">
              <button className="resize-button" onClick={() => decreaseWidth()}>
                -
              </button>
              <input
                className="input-area"
                type="text"
                value={Math.floor(currentWidth)}
                onChange={(e) => {
                  setCurrentWidth(Number(e.target.value));
                  resizeWidth(Number(e.target.value));
                }}
              />
              <button className="resize-button" onClick={() => increaseWidth()}>
                +
              </button>
            </div>
          </div>
          <div id="control-color">
            <div>색상</div>
            <div className="button-area">
              <input
                className="input-area"
                type="text"
                value={currentTextColor}
                onChange={(e) => {
                  setCurrentTextColor(String(e.target.value));
                  reSelectColor(String(e.target.value));
                }}
              />
            </div>
          </div>
          <div id="control-size">
            <div>글자크기</div>
            <div className="button-area">
              <button
                className="rotate-button"
                onClick={() => decreaseTextSize()}
              >
                -
              </button>
              <input
                className="input-area"
                type="text"
                value={Math.floor(currentTextSize)}
                onChange={(e) => {
                  setCurrentTextSize(Number(e.target.value));
                  resizeTextSize(Number(e.target.value));
                }}
              />
              <button
                className="rotate-button"
                onClick={() => increaseTextSize()}
              >
                +
              </button>
            </div>
          </div>
          <div id="control-rotate">
            <div>회전</div>
            <div className="button-area">
              <button
                className="rotate-button"
                onClick={() => rotateDeClockSide()}
              >
                -
              </button>
              <input
                className="input-area"
                type="text"
                value={Math.floor(currentRotate)}
                onChange={(e) => {
                  setCurrentTextSize(Number(e.target.value));
                  rotateObject(`rotate(${Number(e.target.value)}deg)`);
                }}
              />
              <button
                className="rotate-button"
                onClick={() => rotateClockSide()}
              >
                +
              </button>
            </div>
          </div>
          <div id="control-zindex">ƒ
            <div>레이어</div>
            <div id="zindex-buttons">
              <button
                className="zindex-button"
                onClick={() => {
                  if (zindex !== 0) {
                    decreaseZindex(zindex - 1);
                  }
                }}
              >
                -
              </button>
              <input
                className="input-area"
                type="text"
                value={currentZindex}
                onChange={(e) => {
                  setCurrentZindex(e.target.value);
                  modifyZindex(e.target.value);
                }}
              />
              <button
                className="zindex-button"
                onClick={() => {
                  increaseZindex(zindex + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
