import React from "react";
import classes from "../figma.module.scss";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-12 mx-auto gy-4">
        <div className={`card border-0 position-relative ${classes.img_txt_mainn}`} style={{}}>
          <img src={props.images} className="w-100 rounded-0" alt="..." />
          <div className={` ${classes.text_imgg}`}>
            {/* <h3>{props.HT} <span>{props.Total}</span></h3> */}
            <p className={`card-text ${classes.body_font14}`}>{props.title} <span><b>{props.title2}</b></span></p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
