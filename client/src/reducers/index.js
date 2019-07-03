import {combineReducers} from "redux";

function users(state = []) { 
  return state;
}

const rootReducer = combineReducers({
  users
});

export default rootReducer;
