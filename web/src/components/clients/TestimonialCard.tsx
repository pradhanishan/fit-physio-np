import { FC } from "react";
import ClientAvatar from "./ClientAvatar";
import classes from "./testimonial-card.module.css";
import { FaQuoteLeft } from "react-icons/fa";

interface ITestimonialCardProps {
  name: string;
  words: string;
  image: any;
  clientNumber: number;
}

const TestimonialCard: FC<ITestimonialCardProps> = (props) => {
  return (
    <div className={classes["testimonial-container"]}>
      <div className={classes["testimonial-top-container"]}>
        <FaQuoteLeft
          className={
            props.clientNumber === 1
              ? classes["testimonial-quote-icon-1"]
              : props.clientNumber === 2
              ? classes["testimonial-quote-icon-2"]
              : classes["testimonial-quote-icon-3"]
          }
        />
        <p>{props.words}</p>
      </div>
      <div></div>
      <div
        className={
          props.clientNumber === 1
            ? classes["testimonial-bottom-container-1"]
            : props.clientNumber === 2
            ? classes["testimonial-bottom-container-2"]
            : classes["testimonial-bottom-container-3"]
        }
      >
        <div className={classes.avatar}>
          <ClientAvatar image={props.image} clientNumber={props.clientNumber} />
        </div>
        <div className={classes["testimonial-name"]}>
          <span>{props.name}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
