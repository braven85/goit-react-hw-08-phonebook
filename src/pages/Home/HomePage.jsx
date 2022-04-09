import React from "react";
import { Repository } from "../../components/Repository/Repository";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={classes.container}>
      <Repository />
    </section>
  );
};

export default HomePage;
