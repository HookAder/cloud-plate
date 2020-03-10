import { fromJS } from 'immutable';
import { constants } from './';

const initialState = fromJS({
  username: '',
  password: '',
  vcodeText: '',
  vcodeLength: 2,
  isLogin: false
});

export default (state=initialState,action) => {
  switch (action.type) {
    case constants.CHANGE_FORM_VALUE:
      return state.set(action.name,action.value);
    case constants.LOGIN:
      return state.set('isLogin',action.status);
    default:
     return state;
  }
}