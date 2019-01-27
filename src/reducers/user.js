import {
    INIT_LOGGED_USER_DATA
} from "../actions";

export default (state = {}, action) => {
  switch(action.type){
      case INIT_LOGGED_USER_DATA : {
          return {
              ...state,
              id: action.payload.id
          }
      }
      default: return state;
  }
};