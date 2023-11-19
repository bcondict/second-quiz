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
      // console.log(`action.paylodad.columnName: ${action.payload.columnName} action.payload.newValue: ${action.payload.newValue}`)
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
