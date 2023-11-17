import styles from '@/styles/components/QueryComponents/Order.module.css'

import OrderItem from './Order/OrderItem'

const Order = () => {
  const orderColumns = [
    "Indicator Name",
    "Indicator Code",
    "Country Code",
    "Value",
    "Year"
  ]

  return (
    <div className={styles.OrderField}>
      {/* <OrderItem label={"Indicator"}/> */}
      { orderColumns.map((column, index) => {
        return (
          <OrderItem label={column} key={index}/>
        )
      })}
    </div>
  )
}

export default Order;
