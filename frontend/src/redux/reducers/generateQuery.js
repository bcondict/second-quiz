
export const generateQueryString = (checkboxStates, conditionStates, orderStates) => {
  let queryString = ''

  // all is selected then query start with SELECT * FROM
  if (checkboxStates['all']) {
    queryString = 'SELECT * FROM $Dataset';
  }
  // create a list of selected columns and query start with SELECT column1, column2, ... FROM
  else {
    const selectedColumns = Object.keys(checkboxStates).filter((key) => checkboxStates[key] && key !== 'all');
    queryString = `SELECT ${selectedColumns.join(', ')} FROM $Dataset`;
  }

  // check if there is any condition selected and add WHERE to the query
  let hasNonEmptyCondition = Object.keys(conditionStates).some((key) => conditionStates[key] !== '');
  if (hasNonEmptyCondition) {
    const conditionalInitial = ' WHERE ';

    // takes the conditionStates object and filter out the empty values
    queryString += Object.entries(conditionStates)
      .filter((entry) => entry[1] !== '')
      // add WHERE to the query and add AND between each condition
      .reduce((queryString, [field, value], index, {length}) => {
        // new value to be added to the query
        let updatedValue = value;
        // boolean to check if the value must be a number
        const is_number = (field == 'year' || field == 'value')

        // if not includes a comma then it is a single value
        if (!value.includes(',')) {
          // if is a number then no quotes
          updatedValue = ` ${is_number ? '' : "\""}${value.charAt(0).toUpperCase() + value.slice(1)}${is_number ? '' : "\""}`;
          return `${queryString} ${field} = ${updatedValue} ${index == length - 1 ? '' : 'AND '}`;
        }

        // including the comma then it is a list of values and no quotes if is a number
        const valuesArray = value.split(',').map((value) => `${is_number ? '' : "\""}${value.trim().charAt(0).toUpperCase() + value.slice(1)}${is_number ? '' : "\""}`);
        // add commas between each value
        updatedValue = `(${valuesArray.join(', ')})`;

        return `${queryString} ${field} IN ${updatedValue} ${index == length - 1 ? '' : 'AND '}`;
      }, conditionalInitial)
      // replace multiple spaces with a single space
      .replace(/\s+/g, ' ')
      // remove the last space
      .trimEnd();
  }

  // not empty order then add ORDER BY to the query
  hasNonEmptyCondition = Object.keys(conditionStates).some((key) => orderStates[key] !== '' && orderStates[key] !== false)
  if (hasNonEmptyCondition) {
    const orderInitial = ' ORDER BY ';

    // takes the orderStates object and filter out the empty values or false values
    queryString += Object.entries(orderStates)
      .filter((entry) => entry[1] !== '' && entry[1] !== false)
      // add ORDER BY to the query and add commas between each order
      .reduce((queryString, [field, value], index, {length}) =>
        // add ASC or DESC to the query
        `${queryString} ${value ? field : ''} ${value != true ? value : ''} ${index == length - 1 ? '' : ', '}`, orderInitial)
      // replace multiple spaces with a single space
      .replace(/\s+/g, ' ')
      // remove the last space
      .trimEnd();
  }

  return queryString;
}
