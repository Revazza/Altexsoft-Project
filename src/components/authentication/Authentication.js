import React from "react";
import Card from "../../UI/Card";

import classes from "./Authentication.module.css";

import Registration from "./register/Registration";

function Authentication() {
  return (
    <div className={classes.auth_wrapper}>
      <div className={classes.logo}></div>
      <section className={classes.form_wrapper}>
        <Card>
          <h1>
            Travel<span style={{ color: "#F24C4C" }}>M</span>ore
          </h1>
          <Registration />
        </Card>
      </section>
    </div>
  );
}

export default Authentication;
