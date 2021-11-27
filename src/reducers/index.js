import isOpen from './isOpen';
import isLoading from './isLoading';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  isOpen,
  isLoading,
});

export default allReducers;
