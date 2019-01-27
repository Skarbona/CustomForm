import React from "react";
import { connect } from "react-redux";
import Errors from "../Errors";

const TextField = ({
  fieldData,
  placeholder = "",
  label = "",
  name = null,
  required = false,
  onChange = () => {},
  onBlur = () => {}
}) => {
  return (
    <div className="form__fields">
      <Errors
        name={name}
        required={fieldData.validation.required_passed}
        blured={fieldData.blured}
        duplicate={fieldData.validation.title_not_exist}
      >
        <label>
          <div className="form__fields-label">
            {label}
            {required ? <span className="required">*</span> : ""}
          </div>
          <div className="form__fields-input">
            <input
              type="text"
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

export default connect(mapStateToProps)(TextField);
