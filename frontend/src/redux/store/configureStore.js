import { createStore, combineReducers } from 'redux';
import checkboxReducer from '../reducers/checkboxReducer';
import inputReducer from '../reducers/inputReducer';
import orderReducer from '../reducers/orderReducer';
import generateQueryString from '../reducers/generateQuery';


const rootReducer = combineReducers({
  checkboxReducer,
  inputReducer,
  orderReducer,
  generateQueryString,
});

const store = createStore(rootReducer);

export default store;
