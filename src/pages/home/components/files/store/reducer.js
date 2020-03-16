import { constants } from './';
import { constants as HeaderConstants } from '../../../../../common/header/store';
import { constants as FolderConstants } from '../../folder/store';

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
  if(action.type === FolderConstants.DELETE_ONE_FILE){
    const newData = JSON.parse(JSON.stringify(state));
    newData.activeFilesData.splice(action.index,1);
    return newData;
  }
  if(action.type === FolderConstants.UPDATE_FOLDER_DATA){
    const newData = JSON.parse(JSON.stringify(state));
    // console.log(action.folderData);
    newData.activeFilesData = action.folderData;
    return newData;
  }
  return state;
}