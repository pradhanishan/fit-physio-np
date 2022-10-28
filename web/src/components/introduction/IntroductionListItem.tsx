import { FC } from "react";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { FaCheckCircle } from "react-icons/fa";
import classes from "./introduction-list-item.module.css";

interface IIntroductionListItemProps {
  value: string;
}

const IntroductionListItem: FC<IIntroductionListItemProps> = (props) => {
  return (
    <ListGroupItem className={classes["list-item"]}>
      <FaCheckCircle style={{ color: "#b8405e", marginRight: "1rem" }} />
      {props.value}
    </ListGroupItem>
  );
};

export default IntroductionListItem;
