import React from "react";
import "../../../css/editpage/menu/EditMenuBar.css";
import MenuBarElement from "./MenuBarElement";
import useEditMenuBar from "./EditMenuBar.hook";

export default function EditMenuBar(props) {
  const { models, operations } = useEditMenuBar(props);
  const { menus } = models;
  const { handleClick } = operations;

  return (
    <div id="menuBar-container">
      {menus.map((el, index) => (
        <MenuBarElement
          id={el.id}
          key={index}
          className="menubar-btn"
          imgId={el.imgId}
          imgClassName="edit-button"
          imgAlt={el.imgAlt}
          src={el.src}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}
