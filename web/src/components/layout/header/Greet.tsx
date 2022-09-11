import { FC } from "react";
import classes from "./greet.module.css";
import data from "../../../utilities/data";
import { MdLocationPin } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
const Greet: FC = () => {
  return (
    <>
      <div className={`${classes.greet}`}>
        <nav className={classes["nav-greet"]}>
          <div>
            <span>{data.clinicName}</span>
          </div>
          <div className={classes["nav-greet-info"]}>
            <a
              className={classes["nav-location-link"]}
              href={data.urls.googleMapUrl.value}
              target="_blank"
              rel="noreferrer"
            >
              <span className="hide-on-smaller-device">
                <MdLocationPin style={{ marginRight: "1rem" }} />
                {data.location}
              </span>
            </a>
            <span className="hide-on-smaller-device">
              <BsClockHistory style={{ marginRight: "1rem" }} />
              {data.timing.brief}
            </span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Greet;
