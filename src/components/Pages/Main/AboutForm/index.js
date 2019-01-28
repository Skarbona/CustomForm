import React from "react";
import { connect } from "react-redux";

import {
  validationRequired,
  setOnBlur,
  setTargetValues
} from "../../../../actions/form";
import { categories } from "../../../../constans/formValues";
import { payments } from "../../../../constans/formValues";

import Title from "../../../Typography/Title";
import TextField from "../../../Fields/TextField";
import TextArea from "../../../Fields/TextArea";
import Select from "../../../Fields/Select";
import RadioButton from "../../../Fields/RadioButton";
import NumberField from "../../../Fields/NumberField";

const AboutForm = ({ validationRequired, setOnBlur, setTargetValues }) => {
  return (
    <div className="content">
      <Title title="About" />
      <TextField
        placeholder="Make it short and clear"
        required
        name="title"
        onChange={e =>
          validationRequired(e.target.value, "title", {
            required: true,
            duplicateChecker: true
          })
        }
        label="TITLE"
        onBlur={() => setOnBlur("title")}
      />
      <TextArea
        placeholder="Write about your event, be creative"
        required
        name="desc"
        onChange={e =>
          validationRequired(e.target.value, "desc", {
            required: true,
            length: true
          })
        }
        onBlur={() => setOnBlur("desc")}
        label="DESCRIPTION"
      />
      <Select
        label="CATEGORY"
        values={categories}
        name="categories"
        onChange={e => setTargetValues(+e.target.value, "categories")}
      />
      <RadioButton
        label="PAYMENT"
        values={payments}
        name="payments"
        relatedField={
          <NumberField
            name="fee"
            after="$"
            showOn={{ field: "payments", value: true }}
            onChange={e =>
              validationRequired(e.target.value, "fee", { required: true })
            }
          />
        }
        onChange={e => setTargetValues(JSON.parse(e.target.value), "payments")}
      />
      <NumberField
        label="REWARD"
        after="Reward points for attendance"
        onChange={e => setTargetValues(+e.target.value, "reward")}
        name="reward"
      />
    </div>
  );
};

export default connect(
  null,
  { validationRequired, setOnBlur, setTargetValues }
)(AboutForm);
