import { constants as HeaderConstants } from '../../../../../common/header/store';
import { constants } from './';

const initialState = {
  // 文件夹得名称
  filesFolder: [],
  // 某一个文件夹里得数据,
  activeFilesData: []
};

export default (state = initialState, action) => {
  // 创建文件夹
  if (action.type === HeaderConstants.SUBMIT_FOLDER) {
    const newData = JSON.parse(JSON.stringify(state));
    newData.filesFolder.push(action.folder);
    return newData;
  }
  if(action.type === constants.INIT_FOLDER){
    const newData = JSON.parse(JSON.stringify(state));
    newData.filesFolder = action.folder;
    return newData;
  }
  if(action.type === constants.OPEN_FOLDER){
    const newData = JSON.parse(JSON.stringify(state));
    newData.activeFilesData = action.folderData;
    return newData;
  }
  return state;
}