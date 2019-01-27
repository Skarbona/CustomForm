import { INIT_LOGGED_USER_DATA } from "./index";

export const initUserLoggedUserData = () => dispatch => {
  dispatch({ type: INIT_LOGGED_USER_DATA, payload: { id: 3 } });
};
