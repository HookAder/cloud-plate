import { combineReducers } from "redux-immutable";
import { reducer as globalReducer } from '../globalState'; 
import { reducer as loginReducer } from '../pages/login/store';

export default combineReducers({
  'global': globalReducer,
  'login': loginReducer
})