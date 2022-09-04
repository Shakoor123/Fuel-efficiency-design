import React from "react";
import "./Widget.scss";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import ConnectWithoutContactSharpIcon from "@mui/icons-material/ConnectWithoutContactSharp";
import TimerSharpIcon from "@mui/icons-material/TimerSharp";
import Smallchart from "../Smallchart/Smallchart";
const Widget = ({ data }) => {
  const logos = [
    0,
    <LocalGasStationIcon />,
    <ConnectWithoutContactSharpIcon />,
    <TimerSharpIcon />,
  ];
  return (
    <div className="widget">
      <div className="wrapper">
        <div className="left">
          <div
            className="iconBox"
            style={{ backgroundColor: `#${data.color}` }}
          >
            {logos[`${data._id}`]}
          </div>
          <span className="value">{data.value}</span>
          <span className="text">{data.text}</span>
        </div>
        <div className="right">
          <Smallchart color={data.color} />
        </div>
      </div>
    </div>
  );
};

export default Widget;
