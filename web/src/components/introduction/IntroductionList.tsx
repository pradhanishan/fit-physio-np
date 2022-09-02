import { FC } from "react";
import IntroductionListItem from "./IntroductionListItem";

interface IIntroductionListProps {
  points: { key: string; value: string }[];
}

const IntroductionList: FC<IIntroductionListProps> = (props) => {
  return (
    <ul>
      {props.points.map((point) => {
        return <IntroductionListItem key={point.key} value={point.value} />;
      })}
    </ul>
  );
};

export default IntroductionList;
