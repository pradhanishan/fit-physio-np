import { FC } from "react";
import data from "../../utilities/data";
import TestimonialCard from "./TestimonialCard";

import classes from "./testimonial.module.css";
const Testimonial: FC = () => {
  return (
    <>
      <div className={classes["testimonial-header"]}>
        <h5 style={{ fontWeight: "bold" }}>TESTIMONIAL</h5>
        <hr />
      </div>

      <div className={classes.testimonial}>
        {data.clients.map((client) => {
          return (
            <TestimonialCard
              key={client.id}
              image={client.image}
              name={client.name}
              words={client.words}
              clientNumber={client.clientNumber}
            />
          );
        })}
      </div>
    </>
  );
};

export default Testimonial;
