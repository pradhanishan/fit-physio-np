import { FC } from "react";
import Carousel from "react-bootstrap/Carousel";
import bg1 from "../../assets/images/carousel-bg-1.jpg";
import bg2 from "../../assets/images/carousel-bg-2.jpg";
import bg3 from "../../assets/images/carousel-bg-3.jpg";
import classes from "./slogan.module.css";

import data from "../../utilities/data";

const Slogan: FC = () => {
  return (
    <>
      <div className={classes.stripe}></div>
      <Carousel fade controls={false}>
        <Carousel.Item interval={2000}>
          <div className={classes["slogan-image-container"]}>
            <img className={classes["slogan-image"]} src={bg1} alt="First slide" />
          </div>

          <Carousel.Caption>
            <h3>{data.introduction.slogan}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className={classes["slogan-image-container"]}>
            <img className={classes["slogan-image"]} src={bg2} alt="Second slide" />
          </div>
          <Carousel.Caption>
            <h3>{data.introduction.slogan}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className={classes["slogan-image-container"]}>
            <img className={classes["slogan-image"]} src={bg3} alt="Third slide" />
          </div>
          <Carousel.Caption>
            <h3>{data.introduction.slogan}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slogan;
