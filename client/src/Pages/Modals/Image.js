import React from "react";
import "../../css/ImageModal.css";

export default function Image(props) {
  if (!props.status) {
    return null;
  }
  return (
    <div id="modal">
      <div id="modal-nav">
        Image
        <button id="close-button" onClick={() => props.onClose()}>
          Close
        </button>
      </div>
      <div id="description">
        <div id="modal-text">원하는 이미지를 업로드 하세요</div>
      </div>
      <div id="modal-upload">
        <img
          id="modal-add-button"
          src="images/image/addButton.png"
          alt="addButtonImage"
          onClick={() => {
            // TODO : 사진 업로드 구현하기
            console.log("업로드 완료");
            props.onClose();
          }}
        />
      </div>
    </div>
  );
}
