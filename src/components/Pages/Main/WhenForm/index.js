import React from "react";
import { connect } from "react-redux";

import {
  setTargetValues,
  validationRequired,
  setOnBlur
} from "../../../../actions/form";

import Title from "../../../Typography/Title";
import TimeField from "../../../Fields/TimeField";
import NumberField from "../../../Fields/NumberField";
import DateField from "../../../Fields/DateField";

const WhenForm = ({ setTargetValues, validationRequired, setOnBlur }) => {
  return (
    <div className="content">
      <Title title="When" />
      <div className="form__event__date-time">
        <DateField
          label="STARTS ON"
          name="date"
          required
          after="at"
          onBlur={() => setOnBlur("date")}
          onChange={e =>
            validationRequired(e.target.value, "date", {
              required: true,
              dateToday: true
            })
          }
        />
        <TimeField
          name="time"
          onBlur={() => setOnBlur("time")}
          onChange={e =>
            validationRequired(e.target.value, "time", {
              required: true,
              timeFormatChecker: true
            })
          }
        />
      </div>
      <NumberField
        label="DURATION"
        name="duration"
        after="hour"
        onChange={e => setTargetValues(e.target.value, "duration")}
      />
    </div>
  );
};

export default connect(
  null,
  { setTargetValues, validationRequired, setOnBlur }
)(WhenForm);
