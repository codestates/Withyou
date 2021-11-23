import React, { useState } from "react";
import "../../../../css/editpage/canvas/modals/ImageProperty.css";
export default function ImageProperty({
  width,
  height,
  resizeWidth,
  resizeHeight,
  rotateObject,
  transform,
  removeObject,
  zindex,
  modifyZindex,
}) {
  const [currentWidth, setCurrentWidth] = useState(width);
  const [currentHeight, setCurrentHeight] = useState(height);
  const [currentRotate, setCurrentRotate] = useState(
    transform.slice(7).slice(0, -4)
  );

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
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  resizeWidth(currentWidth);
                }
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
            <button className="resize-button" onClick={() => decreaseHeight()}>
              -
            </button>
            <input
              className="input-area"
              type="text"
              value={Math.floor(currentHeight)}
              onChange={(e) => {
                setCurrentHeight(Number(e.target.value));
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  resizeHeight(currentHeight);
                }
              }}
            />
            <button className="resize-button" onClick={() => increaseHeight()}>
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
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  rotateObject(`rotate(${currentRotate}deg)`);
                }
              }}
            />
            <button className="rotate-button" onClick={() => rotateClockSide()}>
              +
            </button>
          </div>
        </div>
        <div id="control-zindex">
          <div>높이</div>
          <div id="zindex-buttons">
            <div id="to-backward">
              <button
                className="zindex-button"
                onClick={() => {
                  if (zindex !== 0) {
                    modifyZindex(zindex - 1);
                  }
                }}
              >
                뒤로
              </button>
            </div>
            <div id="to-forward">
              <button
                className="zindex-button"
                onClick={() => {
                  modifyZindex(zindex + 1);
                }}
              >
                앞으로
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
