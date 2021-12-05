import React from "react";
import "../../../../css/editpage/canvas/modals/Message.css";
export default function SaveMessage({ setIsSave }) {
  return (
    <div id="message-modal">
      서버에 저장하였습니다.
      <br /> MyPage에서 확인해주세요.
      <br />
      <div className="save-modal-container">
        <button id="close-message-modal" onClick={() => setIsSave(false)}>
          Close
        </button>
      </div>
    </div>
  );
}