import { FC } from "react";
import classes from "./highlight-card.module.css";
import { FaHeartbeat } from "react-icons/fa";
import { SiWeightsandbiases } from "react-icons/si";
import { TbMessages } from "react-icons/tb";
interface IHighlightCardProps {
  variant: string;
  heading: string;
  paragraph: string;
}

const HighlightCard: FC<IHighlightCardProps> = (props) => {
  return (
    <div className={classes[`highlight-card-${props.variant}`]}>
      <div className={classes["highlight-icon-container"]}>
        {props.variant === "r" ? <FaHeartbeat /> : props.variant === "y" ? <SiWeightsandbiases /> : <TbMessages />}
      </div>
      <h3>{props.heading}</h3>
      <hr />
      <p>{props.paragraph}</p>
    </div>
  );
};

export default HighlightCard;
