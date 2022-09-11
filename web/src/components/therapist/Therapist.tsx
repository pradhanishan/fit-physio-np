import { FC } from "react";
import data from "../../utilities/data";
import classes from "./therapist.module.css";

const Therapist: FC = () => {
  return (
    <div className={classes.therapist}>
      <h5 className={classes["therapist-header"]}>OUR THERAPIST</h5>
      <hr />
      <h5>Coach Prashansa</h5>
      <ul>
        {data.therapist.map((d) => {
          return (
            <li className={classes["therapist-list-item"]} key={d.key}>
              {d.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Therapist;
