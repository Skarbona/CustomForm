import React from "react";

const TextField = ({
  placeholder = "",
  label = "",
  required = false,
  onChange = () => {}
}) => {
  return (
    <div className="form__fields">
      <label>
        {label}
        {required ? <span className="required">*</span> : ""}
        <input type="text" placeholder={placeholder} onChange={onChange} />
      </label>
    </div>
  );
};

export default TextField;
