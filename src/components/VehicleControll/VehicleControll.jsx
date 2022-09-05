import React from "react";
import "./VehicleControll.scss";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import Switch from "@mui/material/Switch";
const VehicleControll = () => {
  return (
    <div className="vehicle">
      <div className="left">
        <span className="title">Vehicle Controll</span>

        <div className="wrapper">
          <div className="topSide">
            <div className="boxsmall">
              <div className="iconWrapper">
                <AccessAlarmsIcon />
              </div>
              <div className="boxText">Drive Duration</div>
              <Switch defaultChecked />
            </div>
            <div className="boxsmall">
              <div className="iconWrapper">
                <ReportProblemIcon />
              </div>
              <div className="boxText">Alert Sign</div>
              <Switch />
            </div>
          </div>
          <div className="center">
            <div className="wrappers">
              <p className="item">circle</p>
              <p className="item">circle</p>
            </div>
          </div>
          <div className="bottom">
            <div className="wrapper">
              <div className="iconBox">
                <SpeedOutlinedIcon />
              </div>
              <div className="texts">
                <span className="text1">50km/h</span>
                <span className="text2">Average Speed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">graph setup</div>
      </div>
    </div>
  );
};

export default VehicleControll;
