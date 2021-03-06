import { constants } from './';
import request from '../../../../../utils/request';
import message from 'antd/lib/message';


const deleteFile = (index) => ({
  type: constants.DELETE_ONE_FILE,
  index
});

const updateFolder = (folderData) => ({
  type: constants.UPDATE_FOLDER_DATA,
  folderData
})

export const initialDeleteOneFiles = (file,folder,index) => {
  return async dispatch => {
    const result = await request.post('/api/deleteOneFile',{file,folder});
    if(result.data.status === 0){
      message.error(result.data.msg);
      return;
    }
    dispatch(deleteFile(index));
    message.success(result.data.msg);
  }
}

export const initialUpdateFolderData = (folderName) => {
  return async dispatch => {
    const result = await request.post('/api/openFolder',{folderName});
    dispatch(updateFolder(result.data.filesArr));
  }
}
