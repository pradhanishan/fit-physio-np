import { FC } from "react";
import data from "../../utilities/data";
import ClientCard from "./ClientCard";
import classes from "./clients.module.css";
const Clients: FC = () => {
  return (
    <div className={classes.clients}>
      <h5 className={classes["clients-header"]}>OUR CLIENTS</h5>
      <div className={classes["clients-container"]}>
        {data.clients.map((client) => {
          return <ClientCard key={client.id} image={client.image} alt={client.alt} />;
        })}
      </div>
    </div>
  );
};

export default Clients;
