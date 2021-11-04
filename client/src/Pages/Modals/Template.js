import React from "react";
import "../../css/TemplateModal.css";

export default function Template(props) {
  if (!props.status) {
    return null;
  }
  return (
    <div id="modal">
      <div id="modal-nav">
        Template
        <button id="close-button" onClick={() => props.onClose()}>
          Close
        </button>
      </div>
      <div id="description">
        <div id="modal-text">원하는 템플릿을 선택하세요</div>
      </div>
      <div id="modal-upload">
        <div className="row">
          <img
            id="modal-add-button"
            src="images/template/sample.png"
            alt="sampleImage"
            onClick={
              // TODO : 누르면 템플릿 적용되도록 구현
              () => props.onClose()
            }
          />
          <img
            id="modal-add-button"
            src="images/template/sample.png"
            alt="sampleImage"
          />
          <img
            id="modal-add-button"
            src="images/template/sample.png"
            alt="sampleImage"
          />
        </div>
        <div className="row">
          <img
            id="modal-add-button"
            src="images/template/sample.png"
            alt="sampleImage"
          />
          <img
            id="modal-add-button"
            src="images/template/sample.png"
            alt="sampleImage"
          />
          <img
            id="modal-add-button"
            src="images/template/sample.png"
            alt="sampleImage"
          />
        </div>
      </div>
    </div>
  );
}
