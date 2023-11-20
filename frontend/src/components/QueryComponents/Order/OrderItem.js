import styles from '@/styles/components/QueryComponents/Order/OrderItem.module.css/'
import React, { useState, useEffect } from 'react'
import Checkbox from '../Columns/Checkbox'
import { useDispatch, useSelector } from 'react-redux'
import { orderIndicator } from '@/redux/actions/orderAction'

const OrderItem = ({ columnName }) => {
  const dispatch = useDispatch()
  const orderStates = useSelector((state) => state.orderReducer)

  const handleOrderChange = (columnName, newValue, direction) => {
    dispatch(orderIndicator(columnName, newValue, direction))
  }

  return (
    <div className={styles.parent}>

      <Checkbox
        className={styles.checkbox}
        columnName={columnName}
        isSelected={orderStates[columnName]}
        onChange={(event) => handleOrderChange(columnName, event.target.checked, '')}
      />
      {/* Gruop of buttons */}
      <div className={styles.buttonGroup}>
        {/* Button Ascendent */}
        <button
          // className={`${styles.button} ${ascen ? styles.active : ''}`}
          className={`${styles.button}`} 
          onClick={(event) => handleOrderChange(columnName, event.target.checked, 'ASC')}
          // active={ascen}
        >
          Ascen
        </button>
        {/* Button Decendent */}
        <button
          // className={`${styles.button} ${descen ? styles.active : ''}`}
          // active={descen}
          className={`${styles.button}`} 
          onClick={(event) => handleOrderChange(columnName, event.target.checked, 'DESC')}
        >
          Descen
        </button>
      </div>
    </div>
  )
}

export default OrderItem;
