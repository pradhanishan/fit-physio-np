import { FC } from "react";
import HighlightCard from "./HighlightCard";
import data from "../../utilities/data";
import classes from "./highlight.module.css";

const Highlight: FC = () => {
  return (
    <div className={classes.highlight}>
      {data.highlights.map((highlight) => {
        return (
          <HighlightCard
            key={highlight.id}
            heading={highlight.heading}
            paragraph={highlight.paragraph}
            variant={highlight.variant}
          />
        );
      })}
    </div>
  );
};

export default Highlight;
