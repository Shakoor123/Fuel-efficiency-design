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
              <CicularProgressBar />
            </div>
          </div>
          <div className="colum leftBorder">
            <div className="circle">
              <CicularProgressBar />
            </div>
          </div>
          <div className="colum leftBorder">
            <div className="circle">
              <CicularProgressBar />
            </div>
          </div>
          <div className="colum leftBorder">
            <div className="circle">
              <CicularProgressBar />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="colum topBorder "></div>
          <div className="colum topBorder leftBorder"></div>
          <div className="colum topBorder leftBorder">
            <div className="circle">
              <CicularProgressBar />
            </div>
          </div>
          <div className="colum leftBorder"></div>
        </div>
        <div className="row">
          <div className="colum"></div>
          <div className="colum ">
            <div className="circle">
              <CicularProgressBar />
            </div>
          </div>
          <div className="colum ">
            <div className="circle">
              <CicularProgressBar />
            </div>
          </div>
          <div className="colum">
            <div className="circle">
              <CicularProgressBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCircles;
