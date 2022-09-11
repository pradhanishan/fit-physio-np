import { FC } from "react";
import classes from "./greet.module.css";
import data from "../../../utilities/data";
import { MdLocationPin } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import logo from "../../../assets/fitphysio.svg";
const Greet: FC = () => {
  return (
    <>
      <div className={`${classes.greet} hide-on-smaller-device`}>
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
              <span>
                <MdLocationPin style={{ marginRight: "1rem" }} />
                {data.location}
              </span>
            </a>
            <span>
              <BsClockHistory style={{ marginRight: "1rem" }} />
              {data.timing.brief}
            </span>
          </div>
        </nav>
      </div>
      <div className={`${classes["greet-mini"]} hide-on-larger-device`}>
        <img src={logo} className={classes.logo} />
      </div>
    </>
  );
};

export default Greet;
