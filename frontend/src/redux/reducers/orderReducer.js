import { ORDER_INDICATOR } from '../actions/orderAction'

const initialState = {
  'country_name': '',
  'country_code': '',
  'indicator_name': '',
  'indicator_code': '',
  'value': '',
  'year': ''
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_INDICATOR:
      const updatedState = {
        ...state,
        [action.payload.columnName]: action.payload.direction
      }

      if (action.payload.direction === '') {
        updatedState[action.payload.columnName] = action.payload.newValue
      }

      return updatedState
    default:
      return state
  }
}

export default orderReducer;
