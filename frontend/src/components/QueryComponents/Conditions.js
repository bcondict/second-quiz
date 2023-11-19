import styles from '@/styles/components/QueryComponents/Conditions.module.css'
import Input from './Conditions/Input'

import { updateFilter } from '@/redux/actions/inputActions'
import { useDispatch, useSelector } from 'react-redux'

const column = {
  'country_name': 'United States',
  'country_code': 'USA',
  'indicator_name': 'Enrolment in lower secondary education, both sexes (number)',
  'indicator_code': 'UIS.E.2',
  'value': 12404923.0,
  'year': 2011
}

const Conditions = () => {
  const dispatch = useDispatch();
  const inputStates = useSelector((state) => state.inputReducer)

  const handleFilterChange = (columnName, newValue) => {
    dispatch(updateFilter(columnName, newValue))
  }

  return (
    <div className={styles.inputItem}>
      {Object.entries(column).map(([columnName, placeholder], index) => {
        return (
          <Input
            key={index}
            columnName={columnName}
            placeholder={placeholder}
            value={inputStates[columnName]}
            onChange={(event) => handleFilterChange(columnName, event.target.value)}
          />
        )
      })}
    </div>
  )
}

export default Conditions;
