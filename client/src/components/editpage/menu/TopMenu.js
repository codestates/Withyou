import React, { useState } from "react";
import "../../../css/editpage/TopMenu.css";
import DownLoad from "./DownLoad";
import SaveToServer from "./SaveToServer";

export default function TopMenu({
  isLogin,
  deSelectObject,
  setItemStates,
  setCurrentCanvasColor,
  setLoading,
  setIsMessage,
  setIsClientError,
  setIsSuccessMessage,
  setIsServerError,
}) {
  return (
    <div id="top-menu">
      <div className="top-menu-box top-menu-left">
        <div
          id="delete-all-object"
          onClick={() => {
            setCurrentCanvasColor({ hex: "#ffffff" });
            setItemStates([]);
          }}
        >
          전체 삭제
        </div>
      </div>
      <div className="top-menu-box top-menu-right">
        <div id="top-menu-save">
          <DownLoad
            deSelectObject={deSelectObject}
            setIsClientError={setIsClientError}
            setIsMessage={setIsMessage}
          />
          <SaveToServer
            isLogin={isLogin}
            deSelectObject={deSelectObject}
            setIsMessage={setIsMessage}
            setIsSuccessMessage={setIsSuccessMessage}
            setIsClientError={setIsClientError}
            setIsServerError={setIsServerError}
            setLoading={setLoading}
          />
        </div>
      </div>
    </div>
  );
}
