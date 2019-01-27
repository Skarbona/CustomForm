import React from "react";
import { connect } from "react-redux";
import { setTargetValues } from "../../../actions/form";

import RadioButton from "../RadioButton";
import { time } from "../../../constans/formValues";
import Errors from "../Errors";

const DateField = ({
  placeholder = "",
  label = "",
  name = null,
  setTargetValues,
  required = false,
  fieldData,
  onChange = () => {},
  onBlur = () => {}
}) => {
  return (
    <div className="form__fields form__fields__time">
      <Errors
        name={name}
        required={fieldData.validation.required_passed}
        time={fieldData.validation.time_val_passed}
        blured={fieldData.blured}
      >
        <label>
          <div className="form__fields-label">
            {label}
            {required ? <span className="required">*</span> : ""}
          </div>
          <div className="form__fields-input">
            <input
              type="time"
              name={name}
              placeholder={placeholder}
              onChange={onChange}
              onBlur={onBlur}
            />
            <RadioButton
              name="data_format"
              values={time}
              onChange={e =>
                setTargetValues(JSON.parse(e.target.value), "timeFormat")
              }
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
export default connect(
  mapStateToProps,
  { setTargetValues }
)(DateField);
