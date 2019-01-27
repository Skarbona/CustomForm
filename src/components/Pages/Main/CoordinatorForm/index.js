import React from "react";
import { connect } from "react-redux";
import { validationRequired, setOnBlur } from "../../../../actions/form";

import { responsible } from "../../../../constans/formValues";

import Title from "../../../Typography/Title";
import Select from "../../../Fields/Select";
import EmailField from "../../../Fields/EmailField";

const CoordinatorForm = ({ validationRequired, setOnBlur, userId }) => {
  return (
    <div className="content">
      <Title title="Coordinator" />
      <Select
        label="RESPONSIBLE"
        required
        defaultValue={userId}
        values={responsible}
        name="responsible"
        onChange={e =>
          validationRequired(e.target.value, "responsible", { required: true })
        }
      />
      <EmailField
        label="EMAIL"
        name="email"
        placeholder="Email"
        required
        onChange={e =>
          validationRequired(e.target.value, "email", { email: true })
        }
        onBlur={() => setOnBlur("email")}
      />
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    userId: user.id
  };
};

export default connect(
  mapStateToProps,
  { validationRequired, setOnBlur }
)(CoordinatorForm);
