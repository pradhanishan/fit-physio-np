import { FC } from "react";
import classes from "./header.module.css";
import Greet from "./Greet";
import HeaderContact from "./HeaderContact";

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <Greet />
      <HeaderContact />
    </header>
  );
};

export default Header;
