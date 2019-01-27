import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Main from "./Main";
import ThankYou from "./ThankYou";

const Pages = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/thankyou" component={ThankYou} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
};

export default Pages;
