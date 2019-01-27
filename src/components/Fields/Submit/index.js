import React from "react";
import { connect } from "react-redux";

const Submit = ({ text, form }) => {
  const handlerArray = [];
  if (form) {
    Object.keys(form).forEach(field => {
      if (form[field].validation) {
        if (field === "fee" && !form.payments.value) {
          handlerArray.push(true);
        } else {
          Object.keys(form[field].validation).forEach(every => {
            handlerArray.push(form[field].validation[every]);
          });
        }
      }
    });
  }
  let active = handlerArray.every(el => el === true);
  return (
    <div
      className={`button__wrapper ${
        !active ? "button__wrapper--disabled" : ""
      }`}
    >
      <button
        disabled={!active}
        className="button button__submit"
        type="submit"
      >
        {text}
      </button>
    </div>
  );
};

const mapStateToProps = ({ form }) => {
  return {
    form
  };
};

export default connect(mapStateToProps)(Submit);
