import { FC } from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaTiktok } from "react-icons/fa";
import classes from "./social-media-list.module.css";
import data from "../../../utilities/data";
const SocialMediaList: FC = () => {
  return (
    <div className={classes["social-media-list"]}>
      <div className={classes["social-media-icon-container"]}>
        <a
          className={classes["social-medial-link"]}
          href={data.urls.facebookUrl.value}
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook size={32} />
        </a>
      </div>
      <div className={classes["social-media-icon-container"]}>
        <a
          className={classes["social-medial-link"]}
          href={data.urls.facebookUrl.value}
          target="_blank"
          rel="noreferrer"
        >
          <RiInstagramFill size={32} />
        </a>
      </div>
      <div className={classes["social-media-icon-container"]}>
        <a
          className={classes["social-medial-link"]}
          href={data.urls.facebookUrl.value}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={32} />
        </a>
      </div>
      <div className={classes["social-media-icon-container"]}>
        <a className={classes["social-medial-link"]} href={data.urls.tiktokUrl.value} target="_blank" rel="noreferrer">
          <FaTiktok size={32} />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaList;
