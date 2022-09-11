import { FC } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import classes from "./service-card.module.css";

interface IServiceCardProps {
  title: string;
  description: string;
  points: { id: string; value: string }[];
  image: any;
}

const ServiceCard: FC<IServiceCardProps> = (props) => {
  return (
    <Card style={{ width: "18rem", height: "100%", margin: "0 1rem", marginTop: "1rem", backgroundColor: "#fefbf6" }}>
      <Card.Img variant="top" src={props.image} />

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {props.points.map((point) => {
          return (
            <ListGroup.Item style={{ backgroundColor: "#fefbf6" }} key={point.id}>
              {point.value}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Card>
  );
};

export default ServiceCard;
