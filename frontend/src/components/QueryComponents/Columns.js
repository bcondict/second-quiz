import styles from '@/styles/components/QueryComponents/Columns.module.css'
import { useState } from 'react'

import Checkbox from './Columns/Checkbox'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCheckbox } from '@/redux/actions/checkboxActions'

const checkboxColumns = [
  "all",
  'country_name',
  'country_code',
  'value',
  'indicator_name',
  'indicator_code',
  'year'
]

const Columns = ({ className, ...props }) => {
  // Initial state for checkbox set to false
  const dispatch = useDispatch()
  const checkboxStates = useSelector((state) => state.checkboxReducer)


  const handleCheckboxChange = (column, newValue) => {
    dispatch(toggleCheckbox(column, newValue))
  }

  return(
    <div>
      {/* map for all chexkbox needed */}
      { checkboxColumns.map((columnName, index) => {
        return (
          <Checkbox 
            key={index}
            // classname depends of index for organization
            className={`${styles.item} ${index >= 3 ? styles.FullWidth: ''}`}
            // column name
            columnName={columnName}
            // is Checked
            isSelected={checkboxStates[columnName]}
            // Handle the change
            onChange={(event) => handleCheckboxChange(columnName, event.target.checked)}
          />
        )
      })}
    </div>
  )
}


export default Columns;
