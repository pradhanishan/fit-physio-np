import { FC } from "react";
import data from "../../../utilities/data";
import classes from "./header-contact.module.css";
import { FaClinicMedical } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";

const HeaderContact: FC = () => {
  return (
    <div className={classes["header-contact"]}>
      <div className={classes["header-contact-child"]}>
        <div className={classes["header-contact-icon-wrapper"]}>
          <FaClinicMedical className={classes["header-contact-icon"]} />
        </div>
        <div className={classes["header-contact-text"]}>
          <h3 className={classes["header-contact-text-bold"]}>FitPhysio</h3>
          <span>visit us</span>
        </div>
      </div>
      <div className={classes["header-contact-child"]}>
        <div className={classes["header-contact-icon-wrapper"]}>
          <MdCall className={classes["header-contact-icon"]} />
        </div>
        <div className={classes["header-contact-text"]}>
          <h3 className={classes["header-contact-text-bold"]}>Contact Us</h3>
          <span>{data.contact.number}</span>
        </div>
      </div>
      <div className={classes["header-contact-child"]}>
        <div className={classes["header-contact-icon-wrapper"]}>
          <MdEmail className={classes["header-contact-icon"]} />
        </div>
        <div className={classes["header-contact-text"]}>
          <h3 className={classes["header-contact-text-bold"]}>Write To Us</h3>
          <span>{data.contact.email}</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderContact;
