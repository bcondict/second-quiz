export const INPUT_CHANGE = 'INPUT_CHANGE';

export const updateFilter = (columnName, newValue) => ({
  type: INPUT_CHANGE,
  payload: {
    columnName,
    newValue
  },
});
