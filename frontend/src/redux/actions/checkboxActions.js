export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';

export const toggleCheckbox = (checkboxName, newValue) => ({
  type: TOGGLE_CHECKBOX,
  payload: {
    checkboxName,
    newValue
  },
});
