import React from "react";
import Title from "../../Typography/Title";

const ThankYou = () => {
  return (
    <div className="container__content container__content--success">
      <div className="content">
        <Title title="Success" />
        <p>Event has been created</p>
      </div>
    </div>
  );
};

export default ThankYou;
