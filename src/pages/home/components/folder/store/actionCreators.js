import { constants } from './';
import request from '../../../../../utils/request';
import message from 'antd/lib/message';



const deleteFile = (index) => ({
  type: constants.DELETE_ONE_FILE,
  index
});


export const initialDeleteOneFiles = (file,folder,index) => {
  return async dispatch => {
    const result = await request.post('/api/deleteOneFile',{file,folder});
    dispatch(deleteFile(index));
    message.success(result.data.msg);
  }
}