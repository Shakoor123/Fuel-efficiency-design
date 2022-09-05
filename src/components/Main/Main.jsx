import React from "react";
import "./Main.scss";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Widget from "../Widget/Widget";
import VehicleControll from "../VehicleControll/VehicleControll";
import Rightbar from "../Rightbar/Rightbar";
function Main() {
  const datas = [
    {
      _id: 1,
      color: "ec510f",
      value: "6,548L",
      text: "Fuel Usage",
    },
    {
      _id: 2,
      color: "4677e8",
      value: "31875",
      text: "Distance",
    },
    {
      _id: 3,
      color: "2ceec7",
      value: "1h:22m:18s",
      text: "Ideal Time",
    },
  ];
  return (
    <div className="main">
      <div className="mainWrapper">
        <div className="mainContent">
          <div className="mainleft">
            <div className="mainLeftTop">
              <SearchSharpIcon />
              <input
                type="text"
                placeholder="Searching for..."
                name=""
                className="mainLeftTopText"
              />
            </div>
            <div className="mainLeftCenter">
              {datas.map((data) => (
                <Widget data={data} key={data._id} />
              ))}
            </div>
            <div className="mainLeftBottom">
              <span className="summery">summary</span>
              <VehicleControll />
            </div>
          </div>
          <div className="mainRight">
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
