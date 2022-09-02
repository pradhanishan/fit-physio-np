import { FC } from "react";
import classes from "./app.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

// COMPONENT IMPORTS
import Header from "./components/layout/header/Header";
// import Slogan from "./components/slogan/Slogan";
import Highlight from "./components/highlights/Highlight";
import Introduction from "./components/introduction/Introduction";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/layout/footer/Footer";

const App: FC = () => {
  return (
    <div className={classes.app}>
      <Header />
      <main>
        {/* <Slogan /> */}
        <Highlight />
        <Introduction />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
