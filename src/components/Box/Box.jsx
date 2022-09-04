import React from "react";
import Leftbar from "../Leftbar/Leftbar";
import Main from "../Main/Main";
import "./Box.scss";
function Box() {
  return (
    <div className="box">
      <Leftbar />
      <Main />
    </div>
  );
}

export default Box;
