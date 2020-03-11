import { constants } from './';

export const initialSubmitAddFolder = folder => ({
  type: constants.SUBMIT_FOLDER,
  folder
});