
export const generateQueryString = (checkboxStates, conditionStates, orderStates) => {
  let queryString = ''


  if (checkboxStates['all']) {
    queryString = 'SELECT * FROM $Dataset';
  }
  else {
    const selectedColumns = Object.keys(checkboxStates).filter((key) => checkboxStates[key] && key !== 'all');
    queryString = `SELECT ${selectedColumns.join(', ')} FROM $Dataset`;
  }

  
  const hasNonEmptyCondition = Object.keys(conditionStates).some((key) => conditionStates[key] !== '');
  if (hasNonEmptyCondition) {
    const conditionalInitial = ' WHERE ';

    queryString += Object.entries(conditionStates)
      .filter((entry) => entry[1] !== '')
      .reduce((queryString, [field, value], index, {length}) =>
        `${queryString} ${field} = \`${value}\` ${index == length - 1 ? '' : 'AND '}`, conditionalInitial)
      .replace(/\s+/g, ' ')
      .trimEnd();
  }

  if (orderStates['country_name'] !== '') {
    const orderInitial = ' ORDER BY ';

    queryString += Object.entries(orderStates)
      .filter((entry) => entry[1] !== '')
      .reduce((queryString, [field, value], index, {length}) =>
        `${queryString} ${field} ${value != true ? value : ''} ${index == length - 1 ? '' : ', '}`, orderInitial)
      .replace(/\s+/g, ' ')
      .trimEnd();

    // queryString += `${orderInitial} ${orderStates['country_name']} ${orderStates['country_name'] === 'ascen' ? 'ASC' : 'DESC'}`;
  }

  return queryString;
}
