import React from "react";
import Data from "../Components/card/Data";
import Card from "../Components/card/Card";
import Data2 from "../Components/card-2/Data2";
import Cardtwo from "../Components/card-2/Card-two";
import classes from "./figma.module.scss";
import circle from "../images/circle_bg.png"

const Figma = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#fffdfd" }}>
      <div className={` ${classes.gradient_bg_top}`}></div>
      <div className={`container mb-5 pt-5 banner position-relative ${classes.custom_container}`}>
        <div className={` ${classes.circle_imgggg}`}>
        <img src={circle} alt="circle_imgg" />
        </div>
      <div className={`container_inner ${classes.bg_circle_bigg}`}>
        <h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130" fill="none">
          <g filter="url(#filter0_d_1_13)">
          <circle cx="64.9864" cy="48.9864" r="40.9864" fill="white"/>
          </g>
          <path d="M63.8714 28.7376L63.8714 59.6697L49.4306 45.4618L45.7881 49.071L66.4548 69.4043L87.1214 49.071L83.4789 45.4872L69.0381 59.6697L69.0381 28.7376L63.8714 28.7376Z" fill="#FB1F40"/>
          <defs>
          <filter id="filter0_d_1_13" x="0" y="0" width="129.973" height="129.973" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="16"/>
          <feGaussianBlur stdDeviation="12"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.454902 0 0 0 0 0.52549 0 0 0 0.24 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_13"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_13" result="shape"/>
          </filter>
          </defs>
        </svg>
        </h3>
        <h2 className={`mb-5 ${classes.h11}`} >
          GRETTA'S ON A MISSION TO HELP{" "}
          <span className={`d-block ${classes.text_primary}`}>
            {" "}
            ENTREPRENEURS LIKE YOU SUCCEED...
          </span>
        </h2>
        <div className="row justify-content-center align-item-center">
          <div className="col-12">
            <div className="row">
              {Data.map((ele, index) => {
                return (
                  <Card
                    key={index}
                    images={ele.images}
                    HT={ele.HT}
                    Total={ele.Total}
                    title={ele.title}
                    title2={ele.title2}
                  />
                );
              })}
              <div className="col-12">
                <div className="row  ">
                  {Data2.map((ele, index) => {
                    return (
                      <Cardtwo
                        key={index}
                        images={ele.images}
                        title={ele.title}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Figma;
