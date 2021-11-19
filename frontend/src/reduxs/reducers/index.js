import { combineReducers } from "redux";
// import { LOGOUT_SUCCESS } from "../actions/users/actionTypes";

import rdccampaigns from "./campaigns";

const appReducer = combineReducers({
  /* top-level reducers */
  rdccampaigns,
});

// const rootReducer = (state: any, action: any) => {
//   if (action.type === LOGOUT_SUCCESS) {
//     state = undefined;
//   }

//   // Persist
//   // if (action.type === SIGNOUT_REQUEST) {
//   //   // for all keys defined in your persistConfig(s)
//   //   storage.removeItem("persist:root");
//   //   // storage.removeItem('persist:otherKey')

//   //   state = undefined;
//   // }

//   return appReducer(state, action);
// };

const rootReducer = appReducer;

export default rootReducer;
