import { FC } from "react";
import classes from "./greet.module.css";
import data from "../../../utilities/data";
import { MdLocationPin } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";

const Greet: FC = () => {
  return (
    <div className={classes.greet}>
      <nav className={classes["nav-greet"]}>
        <div>
          <span>Welcome to the {data.clinicName} physiotherapy clinic</span>
        </div>
        <div className={classes["nav-greet-info"]}>
          <span>
            <MdLocationPin style={{ marginRight: "1rem" }} />
            {data.location}
          </span>
          <span>
            <BsClockHistory style={{ marginRight: "1rem" }} />
            {data.timing.brief}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Greet;
