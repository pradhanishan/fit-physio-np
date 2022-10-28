import { FC } from "react";
import { ListGroup } from "react-bootstrap";
import IntroductionListItem from "./IntroductionListItem";

interface IIntroductionListProps {
  points: { key: string; value: string }[];
}

const IntroductionList: FC<IIntroductionListProps> = (props) => {
  return (
    <ListGroup>
      {props.points.map((point) => {
        return <IntroductionListItem key={point.key} value={point.value} />;
      })}
    </ListGroup>
  );
};

export default IntroductionList;
