import styles from '@/styles/components/QueryComponents/Columns.module.css'
import { useState } from 'react'

import Checkbox from './Columns/Checkbox'


const checkboxColumns = [
  "all",
  'Country Name',
  'Country Code',
  'value',
  'Indicator Name',
  'Indicator Code',
  'year'
]

const Columns = ({ className, ...props }) => {
  // Initial state for checkbox set to false
  const initialCheckboxState = Object.fromEntries(checkboxColumns.map((column) => [column, false]))

  // set state for checkbox
  const [checkboxStates, setCheckboxStates] = useState(initialCheckboxState)

  // handle checkbox change
  // Column is the name of the column
  // Value is the value of the checkbox (true or false)
  const handleCheckboxChange = (column, newValue) => {
    // Set true all the columns
    const allSelectedState = Object.fromEntries(
      Object.keys(checkboxStates).map((key) => [key, newValue])
    );

    // if column is all, set all the columns to true
    if (column === 'all' ) {
      setCheckboxStates(allSelectedState)
    }

    // if column is not all, set the column to the value
    else {
      // update the state
      const updatedState = {...checkboxStates, [column]: newValue}

      // if all the columns are true except all, set all to true
      const allColumnsAreTrueExceptAll = Object.keys(updatedState).every((key) => {
        return key === 'all' || updatedState[key] === true
      })

      // set all to false if one of the column is false
      if (!newValue) {
        updatedState['all'] = false
      }
      // set all to true if all the columns are true except all
      if (allColumnsAreTrueExceptAll) {
        updatedState['all'] = true;
      }

      setCheckboxStates(updatedState)
    }
  }

  return(
    <div>
      {/* map for all chexkbox needed */}
      { checkboxColumns.map((column, index) => {
        return (
          <Checkbox 
            key={index}
            // classname depends of index for organization
            className={`${styles.item} ${index >= 3 ? styles.FullWidth: ''}`}
            // column name
            label={column}
            // is Checked
            isSelected={checkboxStates[column]}
            // Handle the change
            onChange={(event) => handleCheckboxChange(column, event.target.checked)}
          />
        )
      })}
    </div>
  )
}


export default Columns;
