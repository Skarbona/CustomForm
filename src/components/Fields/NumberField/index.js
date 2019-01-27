import React from "react";
import { connect } from "react-redux";

const NumberField = ({
  placeholder = "",
  label = "",
  min = 0,
  defaultValue = 0,
  name = null,
  after = null,
  required = false,
  showOn = { field: null, value: null },
  field,
  onChange = () => {}
}) => {
  if (
    !showOn.field ||
    (field[showOn.field] && field[showOn.field].value === showOn.value)
  ) {
    return (
      <div className="form__fields">
        <label>
          <div className="form__fields-label">
            {label}
            {required ? <span className="required">*</span> : ""}
          </div>
          <div className="form__fields-input">
            <input
              min={min}
              value={field[name] ? field[name].value : 0}
              type="number"
              placeholder={placeholder}
              onChange={onChange}
            />{" "}
            {after}
          </div>
        </label>
      </div>
    );
  } else return null;
};

const mapStateToProps = state => {
  return {
    field: state.form
  };
};

export default connect(mapStateToProps)(NumberField);
