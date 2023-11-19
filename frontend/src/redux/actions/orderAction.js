export const ORDER_INDICATOR = 'ORDER_INDICATOR'

export const orderIndicator = (columnName, newValue, direction ) => ({
  type: ORDER_INDICATOR,
  payload: {
    columnName,
    newValue,
    direction
  }
})
