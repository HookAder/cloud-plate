import { combineReducers } from "redux-immutable";
import { reducer as globalReducer } from '../globalState'; 

export default combineReducers({
  'global': globalReducer
})