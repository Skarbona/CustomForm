import React from "react";

import AboutForm from "./AboutForm";
import CoordinatorForm from "./CoordinatorForm";
import WhenForm from "./WhenForm";
import FormWrapper from "./Form";
import Submit from "../../Fields/Submit";

const Form = () => {
  return (
    <div className="container__content">
      <FormWrapper>
        <AboutForm />
        <CoordinatorForm />
        <WhenForm />
        <Submit text="Publish Event" />
      </FormWrapper>
    </div>
  );
};

export default Form;
