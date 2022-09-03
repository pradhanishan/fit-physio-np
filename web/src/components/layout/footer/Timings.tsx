import { FC } from "react";
import classes from "./timings.module.css";
import data from "../../../utilities/data";
const Timings: FC = () => {
  // todo
  return (
    <div className={classes.timings}>
      <h5 className={classes["timings-header"]}>TIMINGS</h5>
      <span>{data.timing.brief}</span>
      <hr />
      <span>{data.timing.weekend}</span>
      <hr />
    </div>
  );
};

export default Timings;
