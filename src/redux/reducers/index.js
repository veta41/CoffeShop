import { combineReducers } from 'redux';

import filters from './filters';
import coffes from './coffes';
import cart from './cart';

const rootReducer = combineReducers({
  filters,
  coffes,
  cart,
});

export default rootReducer;
