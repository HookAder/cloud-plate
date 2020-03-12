import { constants } from './';
import request from '../../../utils/request';
import message from 'antd/lib/message';

const initialSubmitAddFolder = folder => ({
  type: constants.SUBMIT_FOLDER,
  folder
});


export const createSubmitAddFolder = folderName => {
  return async dispatch => {
    const result = await request.post('/api/createFolder',{folderName});
    if(result.data.status !== 200){
      message.error(result.data.msg);
    }else{
      // 创建文件夹成功
      dispatch(initialSubmitAddFolder(folderName));
      message.success(result.data.msg);
    }
  }
}