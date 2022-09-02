import { FC } from "react";
import { FaCheckCircle } from "react-icons/fa";
import classes from "./introduction-list-item.module.css";

interface IIntroductionListItemProps {
  value: string;
}

const IntroductionListItem: FC<IIntroductionListItemProps> = (props) => {
  return (
    <li className={classes["list-item"]}>
      <FaCheckCircle style={{ color: "#850e35", marginRight: "1rem" }} />
      {props.value}
    </li>
  );
};

export default IntroductionListItem;
