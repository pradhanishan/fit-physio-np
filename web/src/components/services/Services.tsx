import { FC } from "react";
import classes from "./services.module.css";
import ServiceCard from "./ServiceCard";
import data from "../../utilities/data";

const Services: FC = () => {
  return (
    <div className={classes.services}>
      <h6 className={classes["service-header"]}>OUR SERVICES</h6>
      <h1 className={classes["service-header-secondary"]}>What we offer</h1>
      <div className={classes["services-container"]}>
        {data.services.map((service) => {
          return (
            <ServiceCard
              key={service.id}
              image={service.image}
              description={service.description}
              points={service.points}
              title={service.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
