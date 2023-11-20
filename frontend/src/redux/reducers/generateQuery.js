
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

    // `${queryString} ${field} = \`${value}\` ${index == length - 1 ? '' : 'AND '}`, conditionalInitial)
    queryString += Object.entries(conditionStates)
      .filter((entry) => entry[1] !== '')
      .reduce((queryString, [field, value], index, {length}) => {
        let updatedValue = value;
        if (value.includes(',')) {
          const valuesArray = value.split(',').map((value) => `\`${value.trim()}\``);
          updatedValue = `(${valuesArray.join(', ')})`;
          return `${queryString} ${field} IN ${updatedValue} ${index == length - 1 ? '' : 'AND '}`;
        }
        else {
          updatedValue = `\`${value}\``;
          return `${queryString} ${field} = ${updatedValue} ${index == length - 1 ? '' : 'AND '}`;
        }
      }, conditionalInitial)
      .replace(/\s+/g, ' ')
      .trimEnd();
  }

  if (orderStates['country_name'] !== '') {
    const orderInitial = ' ORDER BY ';

    queryString += Object.entries(orderStates)
      .filter((entry) => entry[1] !== '')
      .reduce((queryString, [field, value], index, {length}) =>
        `${queryString} ${field} ${value != true ? value : ''}${index == length - 1 ? '' : ', '}`, orderInitial)
      .replace(/\s+/g, ' ')
      .trimEnd();

  }

  return queryString;
}
