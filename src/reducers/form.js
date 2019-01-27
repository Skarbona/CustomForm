import {
  VALIDATION_REQUIRED_FAILED,
  VALIDATION_REQUIRED_SUCCESS,
  SET_FIELD_ON_BLUR,
  SAVE_TARGET_VALUE,
  VALIDATION_WORD_LIMITS_OK,
  VALIDATION_WORD_LIMITS_NOT_OK,
  EMAIL_VALIDATION_SUCCESS,
  EMAIL_VALIDATION_FAILED,
  DATE_VALIDATION_FAILED,
  DATE_VALIDATION_SUCCESS,
  TIME_VALIDATION_FAILED,
  TIME_VALIDATION_SUCCESS,
  DUPLICATE_VALIDATION_FAILED,
  DUPLICATE_VALIDATION_SUCCESS,
  DUPLICATE_TITLES_INIT
} from "../actions";

const initialState = {
  existingTitles: [],
  title: {
    blured: false,
    validation: {
      required_passed: false,
      title_not_exist: true
    },
    value: null
  },
  email: {
    blured: false,
    validation: {
      email_passed: false
    }
  },
  desc: {
    blured: false,
    validation: {
      required_passed: false,
      length_ok: true
    },
    length: 0,
    value: null
  },
  date: {
    validation: {
      required_passed: false,
      date_val_passed: false
    }
  },
  payments: { value: false },
  time: {
    validation: {
      required_passed: false,
      time_val_passed: false
    }
  },
  timeFormat: {
    value: true
  },
  fee: {
    blured: false,
    validation: {
      required_passed: false
    },
    value: 0
  },
  responsible: {
    validation: {
      required_passed: true
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DUPLICATE_VALIDATION_FAILED: {
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          validation: {
            ...state[action.payload].validation,
            title_not_exist: false
          }
        }
      };
    }
    case DUPLICATE_VALIDATION_SUCCESS: {
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          validation: {
            ...state[action.payload].validation,
            title_not_exist: true
          }
        }
      };
    }
    case DUPLICATE_TITLES_INIT: {
      return {
        ...state,
        existingTitles: action.payload
      };
    }
    case TIME_VALIDATION_SUCCESS: {
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          length: action.payload.length,
          validation: {
            ...state[action.payload].validation,
            time_val_passed: true
          }
        }
      };
    }
    case TIME_VALIDATION_FAILED: {
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          length: action.payload.length,
          validation: {
            ...state[action.payload].validation,
            time_val_passed: false
          }
        }
      };
    }
    case DATE_VALIDATION_SUCCESS: {
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          length: action.payload.length,
          validation: {
            ...state[action.payload].validation,
            date_val_passed: true
          }
        }
      };
    }
    case DATE_VALIDATION_FAILED: {
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          length: action.payload.length,
          validation: {
            ...state[action.payload].validation,
            date_val_passed: false
          }
        }
      };
    }
    case VALIDATION_WORD_LIMITS_OK: {
      return {
        ...state,
        [action.payload.field]: {
          ...state[action.payload.field],
          length: action.payload.length,
          validation: {
            ...state[action.payload.field].validation,
            length_ok: true
          }
        }
      };
    }
    case VALIDATION_WORD_LIMITS_NOT_OK: {
      return {
        ...state,
        [action.payload.field]: {
          ...state[action.payload.field],
          length: action.payload.length,
          validation: {
            ...state[action.payload.field].validation,
            length_ok: false
          }
        }
      };
    }
    case SAVE_TARGET_VALUE: {
      return {
        ...state,
        [action.payload.field]: {
          ...state[action.payload.field],
          value: action.payload.value
        }
      };
    }
    case SET_FIELD_ON_BLUR: {
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          blured: true
        }
      };
    }
    case VALIDATION_REQUIRED_FAILED:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],

          validation: {
            ...state[action.payload].validation,
            required_passed: false
          },
          blured: true
        }
      };
    case EMAIL_VALIDATION_FAILED:
      return {
        ...state,
        [action.payload.field]: {
          ...state[action.payload.field],
          validation: {
            ...state[action.payload.field].validation,
            email_passed: false
          },
          value: action.payload.value
        }
      };
    case VALIDATION_REQUIRED_SUCCESS:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          validation: {
            ...state[action.payload].validation,
            required_passed: true
          }
        }
      };
    case EMAIL_VALIDATION_SUCCESS:
      return {
        ...state,
        [action.payload.field]: {
          ...state[action.payload.field],
          validation: {
            ...state[action.payload.field].validation,
            email_passed: true
          },
          value: action.payload.value,
          blured: true
        }
      };
    default:
      return state;
  }
};
