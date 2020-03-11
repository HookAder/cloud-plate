import { combineReducers } from "redux-immutable";
import { reducer as loginReducer } from '../pages/login/store';
import { reducer as filesReducer } from '../pages/home/components/files/store';

export default combineReducers({
  'login': loginReducer,
  'files': filesReducer
})