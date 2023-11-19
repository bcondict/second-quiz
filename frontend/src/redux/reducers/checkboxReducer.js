import { TOGGLE_CHECKBOX } from "../actions/checkboxActions";

const initialState = {
  'all': false,
  'country_name': false,
  'country_code': false,
  'value': false,
  'indicator_came': false,
  'indicator_code': false,
  'year': false
}

const checkboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX:
      const { checkboxName, newValue } = action.payload

      if (checkboxName == "all") {
        return Object.fromEntries(
          Object.keys(state).map((key) => [key, newValue])
        )
      }

      // logic for individual checkboxes
      const updatedState = {
        ...state,
        [checkboxName]: newValue,
      }

      const allExceptCurrent = Object.keys(updatedState).filter((key) => key !== 'all' && key !== checkboxName);
      const allAreSelectedExceptCurrent = allExceptCurrent.every((key) => updatedState[key]);

      // if all the columns are true except all, set all to true
      if (allAreSelectedExceptCurrent) {
        updatedState['all'] = true;
      }
      // if one of the column is false, set all to false
      if (!newValue) {
        updatedState['all'] = false;
      }

      return updatedState

    default:
      return state
  }
}

export default checkboxReducer
