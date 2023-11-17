import styles from '@/styles/components/QueryComponents/Order/OrderItem.module.css/'
import React, { useState, useEffect } from 'react'

const OrderItem = ({ label }) => {
  // ascen and descen are the states for the button
  const [isAscen, setIsAscen] = useState(false)
  const [isDescen, setIsDescen] = useState(false)

  // check is the state for the checkbox
  const [isCheck, setIsCheck] = useState(false)

  // Set ascen to true and descen to false
  const handleAscen = () => {
    setIsCheck(true)
    setIsAscen(true)
    setIsDescen(false)
  }
  // Set descen to true and ascen to false
  const handleDescen = () => {
    setIsCheck(true)
    setIsAscen(false)
    setIsDescen(true)
  }

  // set ascen and descen to false if check is false
  useEffect(() => {
    if (!isCheck) {
      setIsAscen(false)
      setIsDescen(false)
    }
  }, [isCheck])

  const handleCheck = () => {
    setIsCheck(!isCheck)
  }

  return (
    <div className={styles.parent}>
      {/* mix of checkbox and name of Column*/}
      <label className={styles.label}>
        {/* Checkbox */}
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isCheck}
          onChange={handleCheck}
        />
        {/* name of the Column */}
        <p className={styles.text}>{label}</p>
      </label>
      {/* Gruop of buttons */}
      <div className={styles.buttonGroup}>
        {/* Button Ascendent */}
        <button
          className={`${styles.button} ${isAscen ? styles.active : ''}`}
          onClick={handleAscen}
        >
          Ascen
        </button>
        {/* Button Decendent */}
        <button
          className={`${styles.button} ${isDescen ? styles.active : ''}`}
          onClick={handleDescen}
        >
          Descen
        </button>
      </div>
    </div>
  )
}

export default OrderItem;
