import { FC } from "react";
import classes from "./services.module.css";
import ServiceCard from "./ServiceCard";

const Services: FC = () => {
  return (
    <div className={classes.services}>
      <h6 className={classes["service-header"]}>OUR SERVICES</h6>
      <h1 className={classes["service-header-secondary"]}>What we offer</h1>
      <div className={classes["services-container"]}>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
