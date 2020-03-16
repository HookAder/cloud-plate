import { constants } from './';
import request from '../../../../../utils/request';
// import message from 'antd/lib/message';

const init_folder = (folder) => ({
  type: constants.INIT_FOLDER,
  folder
})

export const initFolderData = () => {
  return async dispatch => {
    const result = await request.get('/api/getFolder');
    const { folder } = result.data;
    if (folder) {
      // message.success(msg,.8);
      dispatch(init_folder(folder));
    }
  }
};

const add_folder = (folderData) => ({
  type: constants.OPEN_FOLDER,
  folderData
})

export const openFolderData = (folderName) => {
  return async dispatch => {
    const result = await request.post('/api/openFolder',{folderName});
    dispatch(add_folder(result.data.filesArr));
  }
}