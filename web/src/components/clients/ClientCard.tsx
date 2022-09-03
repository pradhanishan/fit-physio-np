import { FC } from "react";
import classes from "./client-card.module.css";

interface IClientCardProps {
  image: any;
  alt: string;
}

const ClientCard: FC<IClientCardProps> = (props) => {
  return (
    <div className={classes["client-card"]}>
      <img className={classes["client-card-image"]} src={props.image} alt={props.alt} />
    </div>
  );
};

export default ClientCard;
