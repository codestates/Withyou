import React from "react";
import "../../../../css/editpage/canvas/modals/Templates.css";
import sample_1 from "../../../../images/templates/sample 1.png";
import sample_2 from "../../../../images/templates/sample 2.png";
import sample_3 from "../../../../images/templates/sample 3.png";
import sample_4 from "../../../../images/templates/sample 4.png";
import sample_5 from "../../../../images/templates/sample 5.png";
import sample_6 from "../../../../images/templates/sample 6.png";
import sample_7 from "../../../../images/templates/sample 7.png";
import sample_8 from "../../../../images/templates/sample 8.png";
const samples = [
  { src: sample_1 },
  { src: sample_2 },
  { src: sample_3 },
  { src: sample_4 },
  { src: sample_5 },
  { src: sample_6 },
  { src: sample_7 },
  { src: sample_8 },
];

export default function Templates({
  itemStates,
  addToItems,
  makeId,
  setItemStates,
}) {
  const templateIndex = itemStates.findIndex(
    (el) => el.style.type === "templates"
  );

  return (
    <div id="templates-modal">
      <div id="templates-modal-nav" className="edit--menu-title">
        <div id="title">템플릿</div>
        <div id="content">원하는 템플릿을 선택해주세요.</div>
      </div>
      <div id="templates-modal-upload">
        {samples.map((el) => (
          <img
            key={makeId()}
            src={el.src}
            alt={el.src}
            onClick={() => {
              if (templateIndex >= 0) {
                const nextState = [...itemStates];
                nextState[templateIndex].src = el.src;
                setItemStates(nextState);
              } else {
                addToItems(el.src, "templates");
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}