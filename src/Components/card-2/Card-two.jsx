import React from "react";
// import classes from "./card2.module.scss";
import classes from "../figma.module.scss";

const Cardtwo = (props) => {
  return (
    <>
      <div className={`col-md-6 gy-4 ${classes.big_imgs_cardd}`}>
        <div className="col ">
          <div className={`card border-0 position-relative ${classes.img_txt_mainn}`}>
            <img src={props.images} className="card-img-top rounded-0" alt="..." />
            <div className="card-body p-0">
              <div className={` ${classes.text_imgg}`}>
                <p className={`card-text ${classes.body_font14}`}>{props.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardtwo;
