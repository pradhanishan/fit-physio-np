import { FC } from "react";
import classes from "./testimonials.module.css";
const Testimonials: FC = () => {
  return (
    <div className={classes.testimonials}>
      <h5 className={classes["testimonials-header"]}>OUR TESTIMONIALS</h5>
      <div className={classes["testimonials-container"]}>{/* todo */}</div>
    </div>
  );
};

export default Testimonials;
