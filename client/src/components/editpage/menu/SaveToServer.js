import React from "react";
import useSaveToServer from "./SaveToServer.hook";

export default function SaveToServer(props) {
  const { operations } = useSaveToServer(props);
  const { saveToServer } = operations;
  return (
    <div id="save" onClick={saveToServer}>
      저장하기
    </div>
  );
}
