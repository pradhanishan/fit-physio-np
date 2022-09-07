import { FC } from "react";
import classes from "./services.module.css";
import ServiceCard from "./ServiceCard";
import data from "../../utilities/data";
import clinicBg from "../../assets/images/clinic.jpg";

const Services: FC = () => {
  return (
    <>
      <div style={{ height: "3px", backgroundColor: "#7d9d9c" }}></div>
      <div className={classes.services} style={{ background: `url(${clinicBg})` }}>
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
    </>
  );
};

export default Services;
