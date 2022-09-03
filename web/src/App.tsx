import { FC } from "react";
import classes from "./app.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

// COMPONENT IMPORTS
import Header from "./components/layout/header/Header";
import Slogan from "./components/slogan/Slogan";
import Highlight from "./components/highlights/Highlight";
import Introduction from "./components/introduction/Introduction";
import Services from "./components/services/Services";
import Clients from "./components/clients/Clients";
import Footer from "./components/layout/footer/Footer";
import Therapist from "./components/therapist/Therapist";

const App: FC = () => {
  return (
    <div className={classes.app}>
      <Header />
      <main>
        <Slogan />
        <Highlight />
        <Introduction />
        <Services />
        <Therapist />
        <Clients />

        <div className={classes["blank-space"]}>
          <section>{/* FUTURE CONTENT GOES HERE */}</section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
