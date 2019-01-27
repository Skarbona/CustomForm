import {
  VALIDATION_REQUIRED_FAILED,
  VALIDATION_REQUIRED_SUCCESS,
  SET_FIELD_ON_BLUR,
  SAVE_TARGET_VALUE,
  VALIDATION_WORD_LIMITS_OK,
  VALIDATION_WORD_LIMITS_NOT_OK,
  EMAIL_VALIDATION_FAILED,
  EMAIL_VALIDATION_SUCCESS,
  DATE_VALIDATION_FAILED,
  DATE_VALIDATION_SUCCESS,
  TIME_VALIDATION_FAILED,
  TIME_VALIDATION_SUCCESS,
  DUPLICATE_VALIDATION_FAILED,
  DUPLICATE_VALIDATION_SUCCESS,
  DUPLICATE_TITLES_INIT
} from "./index";

import re from "../constans/emailValidation";
import axios from "axios";

export const duplicateTitlesInit = () => async dispatch => {
  try {
    const results = await axios.get(
      "http://www.mocky.io/v2/5bcdd8732f00007300c855da"
    );
    const helpArray = [];
    results.data.forEach(single => {
      helpArray.push(single.title);
    });

    dispatch({
      type: DUPLICATE_TITLES_INIT,
      payload: helpArray
    });
  } catch (e) {
    console.warn(e);
  }
};

export const setTargetValues = (value, field) => dispatch => {
  dispatch({
    type: SAVE_TARGET_VALUE,
    payload: {
      field,
      value: value
    }
  });
};

export const setOnBlur = field => dispatch => {
  dispatch({
    type: SET_FIELD_ON_BLUR,
    payload: field
  });
};

export const validationRequired = (value, field, validation = {}) => (
  dispatch,
  getState
) => {
  if (!value && validation.required) {
    dispatch({
      type: VALIDATION_REQUIRED_FAILED,
      payload: field
    });
  }
  if (value && validation.required) {
    dispatch({
      type: VALIDATION_REQUIRED_SUCCESS,
      payload: field
    });
    dispatch({
      type: SAVE_TARGET_VALUE,
      payload: {
        field,
        value
      }
    });
  }

  if (validation.length && value.length > 140) {
    dispatch({
      type: VALIDATION_WORD_LIMITS_NOT_OK,
      payload: {
        field,
        length: value.length
      }
    });
  }

  if (validation.length && value.length <= 140) {
    dispatch({
      type: VALIDATION_WORD_LIMITS_OK,
      payload: {
        field,
        length: value.length
      }
    });
  }

  if (validation.dateToday) {
    const userDate = new Date(value);
    const today = new Date();

    if (userDate <= today) {
      dispatch({
        type: DATE_VALIDATION_FAILED,
        payload: field
      });
    } else {
      dispatch({
        type: DATE_VALIDATION_SUCCESS,
        payload: field
      });
    }
  }

  if (validation.duplicateChecker) {
    const existingTitles = getState().form.existingTitles;

    if (existingTitles.includes(value)) {
      dispatch({
        type: DUPLICATE_VALIDATION_FAILED,
        payload: field
      });
    } else {
      dispatch({
        type: DUPLICATE_VALIDATION_SUCCESS,
        payload: field
      });
    }
  }

  if (validation.timeFormatChecker) {
    const format = getState().form.timeFormat.value;

    if (format && value <= "12:00") {
      dispatch({
        type: TIME_VALIDATION_SUCCESS,
        payload: field
      });
    }

    if (!format) {
      dispatch({
        type: TIME_VALIDATION_SUCCESS,
        payload: field
      });
    }

    if (format && value > "12:00") {
      dispatch({
        type: TIME_VALIDATION_FAILED,
        payload: field
      });
    }
  }

  if (validation.email) {
    if (re.test(value)) {
      dispatch({
        type: EMAIL_VALIDATION_SUCCESS,
        payload: {
          field,
          value
        }
      });
    } else {
      dispatch({
        type: EMAIL_VALIDATION_FAILED,
        payload: {
          field,
          value
        }
      });
    }
  }
};

export const onSubmitForm = (e, history) => (dispatch, getState) => {
  e.preventDefault();

  const d = getState().form;
  const user = getState().user;

  let time = d.time.value;

  if (d.timeFormat) {
    const split = time.split(":");
    const hours = +split[0] + 12;
    time = `${hours}:${split[1]}`;
  }

  const dataToConsole = {
    title: d.title.value,
    description: d.desc.value,
    category_id: d.categories ? d.categories.value : false,
    paid_event: d.payments.value,
    event_fee: +d.fee.value,
    reward: d.reward ? d.reward.value : 0,
    date: `${d.date.value}T${time}`,
    duration: d.duration ? d.duration.value * 1000 : 0,
    coordinator: {
      email: d.email.value,
      id: d.responsible.value ? `${d.responsible.value}` : `${user.id}`
    }
  };

  console.log(dataToConsole);

  history.push('/thankyou')
};
