import React from "react";
import "./Rightbar.scss";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import avathar from "../../assets/avathar.png";

import truck from "../../assets/truck.jpg";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="wrapper">
        <div className="rtop">
          <div className="iconContainer">
            <CalendarMonthIcon />
          </div>
          <div className="iconContainer">
            <NotificationsActiveIcon />
          </div>
          <img src={avathar} alt="" className="avathar" />
          <div className="userData">
            <span className="name">Mike Smith</span>
            <span className="role">Admin</span>
          </div>
        </div>
        <div className="rbottom">
          <div className="rbottomTop">
            <ChevronLeftIcon />
            <span className="light">Fleet Details</span>
            <span className="dark">old street,new york</span>
          </div>
          <div className="rbottomBottom">
            <div className="rbWrapper">
              <div className="carinfo">
                <span className="no">ER 14 D 9545</span>
                <span className="name">Gurz old center</span>
              </div>
              <img src={truck} alt="" className="cartImage" />
              <div className="carDetails">
                <div className="item">
                  <span className="item1">Speed</span>
                  <span className="item2">140km/h</span>
                </div>
                <div className="item">
                  <span className="item1">Attitude</span>
                  <span className="item2">154m</span>
                </div>
                <div className="item">
                  <span className="item1">Direction</span>
                  <span className="item2">NE</span>
                </div>
              </div>
              <div className="truckDetails">
                <div className="icon">
                  <PodcastsIcon />
                </div>
                <div className="dlist">
                  <div className="dlist0">
                    <div className="dlistItem1 big">EW trucks Pvt Ltd</div>
                    <div className="dlistItem1 ">85 New Work,ll phase</div>
                    <div className="dlistItem1 ">Old Street</div>
                    <div className="dlistItem1 ">New York, USA</div>
                  </div>
                  <div className="dlist1">
                    <div className="dlistItem1 ">18 Client</div>
                    <div className="dlistItem1 ">Total Drivers</div>
                    <div className="dlistItem1 ">64452 KM</div>
                  </div>
                </div>
              </div>
              <div className="customerDetails">
                <img src={avathar} alt="" className="cImage" />
                <div className="cdetails">
                  <span className="name">Kevin pitersian</span>
                  <span className="place">USA</span>
                </div>
                <span className="trips">42 Trips</span>
              </div>
              <button className="button">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
