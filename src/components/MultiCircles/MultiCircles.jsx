import React from "react";
import "./MultiCircles.scss";
import CicularProgressBar from "../CicularProgressBar/CicularProgressBar";
const MultiCircles = () => {
  return (
    <div className="mul">
      <div className="rows">
        <div className="row">
          <div className="colum leftBorder">
            <div className="circle">
              Reserve
              <CicularProgressBar percentage={7} color={"blue"} />
            </div>
          </div>
          <div className="colum leftBorder">
            <div className="circle">
              Gear 1
              <CicularProgressBar percentage={16} color={"blue"} />
            </div>
          </div>
          <div className="colum leftBorder">
            <div className="circle">
              Gear 3
              <CicularProgressBar percentage={10} color={"blue"} />
            </div>
          </div>
          <div className="colum leftBorder">
            <div className="circle">
              Gear 5
              <CicularProgressBar percentage={16} color={"blue"} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="colum topBorder "></div>
          <div className="colum topBorder leftBorder"></div>
          <div className="colum topBorder leftBorder">
            <div className="circle">
              <CicularProgressBar percentage={7} color={"blue"} />
            </div>
          </div>
          <div className="colum leftBorder"></div>
        </div>
        <div className="row">
          <div className="colum"></div>
          <div className="colum ">
            <div className="circle">
              <CicularProgressBar percentage={18} color={"blue"} />
              Gear 2
            </div>
          </div>
          <div className="colum ">
            <div className="circle">
              <CicularProgressBar percentage={12} color={"blue"} />
              Gear 4
            </div>
          </div>
          <div className="colum">
            <div className="circle">
              <CicularProgressBar percentage={8} color={"blue"} />
              Gear 6
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCircles;
