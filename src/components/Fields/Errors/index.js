import React from "react";

const Errors = ({
  required = null,
  blured = false,
  date_val = null,
  email = null,
  time = null,
  name = null,
  length_ok = true,
  length = 0,
  duplicate = null,
  children
}) => {
  let errors = [];
  let errorsClass = "";
  if (length_ok && length > 0) {
    errors.push(
      <div key={`${name}-required`} className="form__fields__info">
        Number of letters: {140 - length}
      </div>
    );
  }
  if (!length_ok && blured && length > 0) {
    errors.push(
      <div key={`${name}-required`} className="form__fields__error">
        You used too much letters: {(140 - length) * -1}
      </div>
    );
    errorsClass = "form__fields--error";
  }
  if (!required && blured && required !== null) {
    errors.push(
      <div key={`${name}-required`} className="form__fields__error">
        This Field is Required
      </div>
    );
    errorsClass = "form__fields--error";
  }

  if (!email && blured && email !== null) {
    errors.push(
      <div key={`${name}-email_checker`} className="form__fields__error">
        This Email is not correct
      </div>
    );
    errorsClass = "form__fields--error";
  }
  if (!date_val && blured && date_val !== null) {
    errors.push(
      <div key={`${name}-date_val`} className="form__fields__error">
        You can't set event for today or for the past!
      </div>
    );
    errorsClass = "form__fields--error";
  }
  if (!time && blured && time !== null) {
    errors.push(
      <div key={`${name}-date_val`} className="form__fields__error">
        Set time with correct time format !
      </div>
    );
    errorsClass = "form__fields--error";
  }
  if (!duplicate && blured && duplicate !== null) {
    errors.push(
      <div key={`${name}-duplicate`} className="form__fields__error">
        The event with this title exist in our database!
      </div>
    );
    errorsClass = "form__fields--error";
  }

  return (
    <div className={errorsClass}>
      {children}
      {errors}
    </div>
  );
};

export default Errors;
