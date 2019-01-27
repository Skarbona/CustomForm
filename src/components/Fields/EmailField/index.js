import React from "react";
import Errors from "../Errors";
import { connect } from "react-redux";

const EmailField = ({
  placeholder = "",
  label = "",
  name = null,
  required = false,
  fieldData,
  onBlur = () => {},
  onChange = () => {}
}) => {
  return (
    <div className="form__fields">
      <Errors
        name={name}
        email={fieldData.validation.email_passed}
        blured={fieldData.blured}
      >
        <label>
          <div className="form__fields-label">
            {label}
            {required ? <span className="required">*</span> : ""}
          </div>
          <div className="form__fields-input">
            <input
              type="email"
              placeholder={placeholder}
              onChange={onChange}
              onBlur={onBlur}
            />
          </div>
        </label>
      </Errors>
    </div>
  );
};

const mapStateToProps = ({ form }, ownState) => {
  return {
    fieldData: form[ownState.name]
  };
};

export default connect(mapStateToProps)(EmailField);
