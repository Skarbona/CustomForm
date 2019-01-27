import React from "react";

const RadioButton = ({
  placeholder = "",
  label = "",
  required = false,
  values = [],
  name = null,
  relatedField = null,
  onChange = () => {}
}) => {
  const valuesHelper = () => {
    return values.map((v, i) => {
      return (
        <div className="form__fields-input__radio" key={`${name}-${i}`}>
          <input
            defaultChecked={i === 0}
            type="radio"
            name={name}
            value={v.value}
          />{" "}
          {v.name}
        </div>
      );
    });
  };
  return (
    <div className={`form__fields form__fields__radio form__fields__radio-${name}`}>
      <label>
        <div className="form__fields-label">
          {label}
          {required ? <span className="required">*</span> : ""}
        </div>
        <div className="form__fields-input" onChange={onChange}>
          {valuesHelper()}
        </div>
        {relatedField}
      </label>
    </div>
  );
};

export default RadioButton;
