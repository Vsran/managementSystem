import * as user from "./action-type";

let defaultStatus = {
  status: false
}

export const ifLogged = (state = defaultStatus, action = {}) => {
  switch (action.type) {
    case user.LOGIN:
      return {...state, ...{userStatus: action.userStatus}};
    case user.LOGOUT:
      return {...state, ...{userStatus: action.userStatus}};
    default:
      return state;
  }
}