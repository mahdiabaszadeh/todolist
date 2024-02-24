import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
// Import other reducers if you have more

export const rootReducer = combineReducers({
  todo: todoReducer,
  // Add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;