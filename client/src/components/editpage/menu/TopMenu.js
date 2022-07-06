import React from "react";
import "../../../css/editpage/TopMenu.css";
import DownLoad from "./DownLoad";
import SaveToServer from "./SaveToServer";

export default function TopMenu({
  setIsMessage,
  setIsConfirmMessage,
  ...rest
}) {
  return (
    <div id="top-menu">
      <div className="top-menu-box top-menu-left">
        <div
          id="delete-all-object"
          onClick={() => {
            setIsMessage(true);
            setIsConfirmMessage(true);
          }}
        >
          전체 삭제
        </div>
      </div>
      <div className="top-menu-box top-menu-right">
        <div id="top-menu-save">
          <DownLoad setIsMessage={setIsMessage} {...rest} />
          <SaveToServer setIsMessage={setIsMessage} {...rest} />
        </div>
      </div>
    </div>
  );
}
