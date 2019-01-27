import React from "react";
import { connect } from "react-redux";
import Errors from "../Errors";

const TextArea = ({
  name = null,
  fieldData,
  placeholder = "",
  label = "",
  required = false,
  onChange = () => {},
  onBlur = () => {}
}) => {
  return (
    <div className="form__fields">
      <Errors
        name={name}
        required={fieldData.validation.required_passed}
        length_ok={fieldData.validation.length_ok}
        length={fieldData.length}
        blured={fieldData.blured}
      >
        <label>
          <div className="form__fields-label">
            {label}
            {required ? <span className="required">*</span> : ""}
          </div>
          <div className="form__fields-input">
            <textarea
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

export default connect(mapStateToProps)(TextArea);
