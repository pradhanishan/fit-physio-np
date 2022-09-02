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
        <ContactDetail />

        <Timings />
        <hr />

        <SocialMediaList />
        <hr />
        <Developer />
      </div>
    </footer>
  );
};

export default Footer;
