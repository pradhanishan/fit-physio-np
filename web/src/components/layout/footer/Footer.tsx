import { FC } from "react";
import classes from "./footer.module.css";
import SocialMediaList from "./SocialMediaList";
import ContactDetail from "./ContactDetail";
import Timings from "./Timings";
import Developer from "./Developer";
const Footer: FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-container"]}>
        <div className={classes["footer-child-1"]}>
          <ContactDetail />
        </div>
        <div className={classes["footer-child-2"]}>
          <Timings />
        </div>
        <div className={classes["footer-child-3"]}>
          <SocialMediaList />
          <hr />
        </div>
        <div className={classes["footer-child-4"]}>
          <Developer />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
