import { FC } from "react";
import classes from "./introduction.module.css";
import data from "../../utilities/data";
import IntroductionList from "./IntroductionList";

const Introduction: FC = () => {
  return (
    <div className={classes.introduction}>
      <h6 className={classes["introduction-header"]}>CLINIC INTRODUCTION</h6>
      <hr />
      <span className={classes["introduction-welcome-header"]}>Welcome to {data.clinicName} Clinic</span>
      <p className={classes["introduction-slogan-header"]}>
        Our treatment approaches are customized to your specific needs, taking into consideration your symptoms, medical
        history, and any health constraints you may have. We are excited to see you reach your recovery, health and
        fitness goals.
      </p>
      <IntroductionList points={data.introduction.points} />
    </div>
  );
};

export default Introduction;
