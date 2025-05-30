/**
 * --------------------------------------------------------
 * File        : index.js
 * Description : Combines all Redux slices and handles global state resets.
 * Authors     : Developer team
 * Created On  : 2025-04-30
 * Updated On  : 2025-04-30
 * --------------------------------------------------------
 * Notes:
 * - Uses combineReducers to include multiple slices (e.g., signin, onboarding).
 * - Clears persisted state from localStorage on logout action.
 * - Works with redux-persist to manage session data.
 */

import { combineReducers } from "redux";
import localStorage from "redux-persist/lib/storage";

// import configuration from "../../modules/configuration/slice/configurationSlice";
const appReducer = combineReducers({

  // configuration,
});

export const rootReducer = (state, action) => {
  if (action.type === "signin/logout") {
    // this applies to all keys defined in persistConfig(s)
    localStorage.removeItem("persist:root");
    state = {};
  }
  return appReducer(state, action);
};
