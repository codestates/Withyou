import React from "react";
import Templates from "../canvas/modals/Templates";
import Image from "../canvas/modals/Image";
import Elements from "../canvas/modals/Elements";
import Text from "../canvas/modals/Text";
import "../../../css/editpage/menu/EditMenu.css";

function EditMenu({ makeId, menuBtnStatus, addToItems, ...rest }) {
  return (
    <div id="detail-property">
      <div id="edit-menu-container">
        {menuBtnStatus === "menuBar-templates" && (
          <Templates addToItems={addToItems} makeId={makeId} {...rest} />
        )}
        {menuBtnStatus === "menuBar-elements" && (
          <Elements addToItems={addToItems} makeId={makeId} />
        )}
        {menuBtnStatus === "menuBar-image" && <Image addToItems={addToItems} />}
        {menuBtnStatus === "menuBar-text" && <Text addToItems={addToItems} />}
      </div>
    </div>
  );
}

export default EditMenu;
