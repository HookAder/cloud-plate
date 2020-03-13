import { HashRouter } from 'react-router-dom';
import message from 'antd/lib/message';
import { constants } from './';
import request from '../../../utils/request';

export const initiaChangeFormValue = (value,name) => ({
  type: constants.CHANGE_FORM_VALUE,
  value,
  name
});

const initialLoginState = status => ({
  type: constants.LOGIN,
  status
})

export const initialLoginAPP =  (user,pass) => {
  return async dispatch => {
    const result = await request.post('/api/login',{user,pass});
    // console.log(result.data);
    if(result.data.status === 200){
      dispatch(initialLoginState(true));
      message.success(result.data.msg,.8);
      const router = new HashRouter();
      router.history.replace('/');
      //window.location.pathname = '/';
    }else{
      message.error(result.data.msg,.8);
    }
  }
}