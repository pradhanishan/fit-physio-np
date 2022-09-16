import { FC } from "react";
import data from "../../utilities/data";
import classes from "./therapist.module.css";
import ListGroup from "react-bootstrap/ListGroup";

const Therapist: FC = () => {
  return (
    <div className={classes.therapist}>
      <h5 className={classes["therapist-header"]}>OUR THERAPIST</h5>
      <hr />
      <h5>Coach Prashansa</h5>
      <ListGroup variant="flush">
        {data.therapist.map((d) => {
          return (
            <ListGroup.Item className={classes["therapist-list-item"]} key={d.key}>
              {d.value}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Therapist;
