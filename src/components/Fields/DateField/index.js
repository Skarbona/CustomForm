import React from "react";
import { connect } from "react-redux";
import Errors from "../Errors";

const DateField = ({
  placeholder = "",
  label = "",
  required = false,
  name = null,
  fieldData,
  after = null,
  onChange = () => {},
  onBlur = () => {}
}) => {
  return (
    <div className="form__fields form__fields__date">
      <Errors
        name={name}
        required={fieldData.validation.required_passed}
        date_val={fieldData.validation.date_val_passed}
        blured={fieldData.blured}
      >
        <label>
          <div className="form__fields-label">
            {label}
            {required ? <span className="required">*</span> : ""}
          </div>
          <div className="form__fields-input">
            <input
              type="date"
              name={name}
              placeholder={placeholder}
              onChange={onChange}
              onBlur={onBlur}
            />
            {after}
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
export default connect(mapStateToProps)(DateField);
