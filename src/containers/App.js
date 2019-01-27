import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Header from "../components/Header";
import Pages from "../components/Pages";

import { duplicateTitlesInit } from "../actions/form";
import { initUserLoggedUserData } from "../actions/user";

class App extends React.Component {
  componentDidMount = () => {
    const { duplicateTitlesInit, initUserLoggedUserData } = this.props;
    duplicateTitlesInit();
    initUserLoggedUserData();
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <Pages />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(
  connect(
    null,
    { duplicateTitlesInit, initUserLoggedUserData }
  )(App)
);
