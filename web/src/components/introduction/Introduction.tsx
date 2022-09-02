import { FC } from "react";
import classes from "./introduction.module.css";
import data from "../../utilities/data";
import IntroductionList from "./IntroductionList";

const Introduction: FC = () => {
  return (
    <div className={classes.introduction}>
      <h6 className={classes["introduction-header"]}>CLINIC INTRODUCTION</h6>
      <h2 className={classes["introduction-welcome-header"]}>Welcome to {data.clinicName} Clinic</h2>
      <h4 className={classes["introduction-slogan-header"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quibusdam deleniti dicta magni sapiente facilis
        asperiores accusantium consequatur perspiciatis odio?
      </h4>
      <IntroductionList points={data.introduction.points} />
    </div>
  );
};

export default Introduction;
