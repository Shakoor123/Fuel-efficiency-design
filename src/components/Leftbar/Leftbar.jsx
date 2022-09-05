import React from "react";
import "./Leftbar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import InsertCommentRoundedIcon from "@mui/icons-material/InsertCommentRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import fuel from "../../assets/fuel.png";
function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <div className="leftbarTop">
          <img src={fuel} alt="Logo" className="leftbarLogo" />
        </div>
        <div className="leftbarBody">
          <ul className="leftbarList">
            <li className="LeftbarListItem">
              <DashboardIcon />
              <span className="itemText">Dashboard</span>
            </li>
            <li className="LeftbarListItem selected">
              <LocalGasStationIcon />
              <span className="itemText ">Fuel Efficiency</span>
            </li>
            <li className="LeftbarListItem">
              <FileCopyIcon />
              <span className="itemText">Documments</span>
            </li>
            <li className="LeftbarListItem">
              <InsertCommentRoundedIcon />
              <span className="itemText">Messages</span>
            </li>
            <li className="LeftbarListItem">
              <SettingsRoundedIcon />
              <span className="itemText">Settings</span>
            </li>
            <li className="LeftbarListItem">
              <CalendarMonthSharpIcon />
              <span className="itemText">Calender</span>
            </li>
            <li className="LeftbarListItem">
              <LocalPhoneSharpIcon />
              <span className="itemText">Help Center</span>
            </li>
          </ul>
        </div>
        <div className="leftbarBottom">
          <LogoutSharpIcon />
          <span className="itemText">Log out</span>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
