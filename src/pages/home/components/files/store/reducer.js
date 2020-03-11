import { constants as HeaderConstants } from '../../../../../common/header/store';

const initialState = {
  filesFolder: [
    {
      title: '游戏'
    },
    {
      title: '文章'
    },
    {
      title: '前端'
    }
  ]
};

export default (state = initialState, action) => {
  if (action.type === HeaderConstants.SUBMIT_FOLDER) {
    const newData = JSON.parse(JSON.stringify(state));
    newData.filesFolder.push(action.folder);
    return newData;
  }
  return state;
}