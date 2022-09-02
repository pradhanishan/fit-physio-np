import { FC } from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import classes from "./social-media-list.module.css";
const SocialMediaList: FC = () => {
  return (
    <div className={classes["social-media-list"]}>
      <div className={classes["social-media-icon-container"]}>
        <FaFacebook size={32} />
      </div>
      <div className={classes["social-media-icon-container"]}>
        <RiInstagramFill size={32} />
      </div>
    </div>
  );
};

export default SocialMediaList;
