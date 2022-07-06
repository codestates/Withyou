import { useState } from "react";

function useTextOnCanvas({
  modifyText,
  setOnMove,
  onClickObjcet,
  setMouseInitLocation,
  isDragging,
  onDragAndDrop,
  controlCursorStyle,
  onDragEnd,
  onDragAndDropMobile,
  opacityOnObject,
  onMove,
}) {
  const [currentText, setCurrentText] = useState("텍스트를 입력해주세요.");

  function onChange(e) {
    setCurrentText(e.target.value);
    modifyText(e.target.value);
  }

  function onMouseDown(e) {
    setOnMove(true);
    onClickObjcet(e);
    setMouseInitLocation(e.clientX, e.clientY);
  }

  function onTouchStart(e) {
    const target = e.touches[0];
    onClickObjcet(e);
    setMouseInitLocation(target.clientX, target.clientY);
  }

  function onMouseMove(e) {
    if (isDragging) {
      onDragAndDrop(e);
    }
  }

  function onMouseUp(e) {
    setOnMove(false);
    controlCursorStyle(e, "grab");
    onDragEnd();
  }

  function onTouchEnd(e) {
    controlCursorStyle(e, "grab");
    onDragEnd();
    document.body.style.overflow = null;
  }

  function onTouchMove(e) {
    document.body.style.overflow = "hidden";
    document.querySelector("html").scrollTop = window.scrollY;
    if (isDragging) {
      onDragAndDropMobile(e.touches[0]);
    }
  }

  function onMouseOver(e) {
    controlCursorStyle(e, "grab");
    opacityOnObject(e, 0.5);
  }

  function onMouseOut(e) {
    opacityOnObject(e, 1);
    if (onMove) {
      onDragAndDrop(e);
    }
  }

  return {
    models: {
      currentText,
    },
    operations: {
      onChange,
      onMouseDown,
      onTouchStart,
      onMouseMove,
      onMouseUp,
      onTouchEnd,
      onTouchMove,
      onMouseOver,
      onMouseOut,
    },
  };
}

export default useTextOnCanvas;
