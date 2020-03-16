import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// 开发模式调试redux
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store;