import React from "react";
import { connect } from "react-redux";
import { onSubmitForm } from "../../../../actions/form";
import { withRouter } from "react-router-dom";

const Form = ({ children, onSubmitForm, history }) => {
  return (
    <form onSubmit={e => onSubmitForm(e, history)} className="form form__event">
      {children}
    </form>
  );
};

export default withRouter(
  connect(
    null,
    { onSubmitForm }
  )(Form)
);
