import { FC } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import classes from "./contact-detail.module.css";
import data from "../../../utilities/data";
import { FaMapSigns } from "react-icons/fa";
const ContactDetail: FC = () => {
  // todo
  return (
    <div className={classes["contact-detail"]}>
      <div>
        <MdEmail className={classes["contact-detail-icon"]} />
        <span className={classes["contact-detail-text"]}>{data.contact.email}</span>
      </div>
      <div>
        <MdPhone className={classes["contact-detail-icon"]} />
        <span className={classes["contact-detail-text"]}>{data.contact.number}</span>
      </div>

      <div>
        <FaMapSigns className={classes["contact-detail-icon-green"]} />
        <a
          className={classes["contact-detail-text-link"]}
          href={data.urls.googleMapUrl.value}
          target="_blank"
          rel="noreferrer"
        >
          <span className={classes["contact-detail-link-text"]}>Find us on google map</span>
        </a>
      </div>
    </div>
  );
};

export default ContactDetail;
