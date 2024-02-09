import { combineReducers, createStore, applyMiddleware } from 'redux';
import TeacherReducer from './teachers/TeacherReducer';
// import iceCreamReducer from './iceCream/iceCreamReducer';
// import usersReducer from './user/usersReducer';
// import logger from 'redux-logger';

const rootReducer = combineReducers({
//   cake: cakeReducer,
//   iceCream: iceCreamReducer,
  users: TeacherReducer,
});

const store = createStore(
  rootReducer
  // , applyMiddleware(logger)
);

export default store;