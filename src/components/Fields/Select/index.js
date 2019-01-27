import React from "react";

const Select = ({
  placeholder = "",
  label = "",
  name = null,
  values = [],
  defaultValue = null,
  required = false,
  onChange = () => {}
}) => {
  const valuesHelper = () => {
    return values.map((v, i) => {
      return (
        <option
          key={`${name}-${i}`}
          value={v.id}
          defaultValue={defaultValue === v.id}
        >
          {v.name}
        </option>
      );
    });
  };

  return (
    <div className="form__fields">
      <label>
        <div className="form__fields-label">
          {label}
          {required ? <span className="required">*</span> : ""}
        </div>
        <div className="form__fields-input">
          <select
            onChange={onChange}
            name={name}
            defaultValue={!defaultValue ? placeholder : null}
          >
            <option disabled value="placeholder">
              Select {label}
            </option>
            {valuesHelper()}
          </select>
        </div>
      </label>
    </div>
  );
};

export default Select;
