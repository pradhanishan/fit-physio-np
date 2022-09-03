import { FC } from "react";
import classes from "./developer.module.css";
import data from "../../../utilities/data";

const Developer: FC = () => {
  return (
    <div className={classes.developer}>
      <a className={classes["developer-link"]} href={data.developer.linkedinUrl} target="_blank" rel="noreferrer">
        developed by {data.developer.name} &copy;
      </a>
    </div>
  );
};

export default Developer;
