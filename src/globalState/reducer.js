import { fromJS } from "immutable";

const initialState = fromJS({
  site: '非清网盘',
  version: '1.0.0',
  auther: '沉鱼落木'
})

export default (state=initialState,action) => {
  return state;
}