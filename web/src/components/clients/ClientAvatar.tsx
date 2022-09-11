import { FC } from "react";
import Image from "react-bootstrap/Image";
import human from "../../assets/images/human.jpg";
import classes from "./client-avatar.module.css";

interface IClientAvatarProps {
  image: any;
  clientNumber: number;
}

const ClientAvatar: FC<IClientAvatarProps> = (props) => {
  return (
    <div
      className={
        props.clientNumber === 1
          ? classes["avatar-container-1"]
          : props.clientNumber === 2
          ? classes["avatar-container-2"]
          : classes["avatar-container-3"]
      }
    >
      <Image src={props.image} rounded className={classes["avatar-image"]} />
    </div>
  );
};

export default ClientAvatar;
