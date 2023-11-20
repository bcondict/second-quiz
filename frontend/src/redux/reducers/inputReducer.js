import { INPUT_CHANGE } from '../actions/inputActions';

const initialState = {
  'country_name': '',
  'country_code': '',
  'indicator_name': '',
  'indicator_code': '',
  'value': '',
  'year': ''
}

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      const updatedState = {
        ...state,
        [action.payload.columnName]: action.payload.newValue
      }
      return updatedState
    default:
      return state;
  }
}

export default inputReducer;
