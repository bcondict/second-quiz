import styles from '@/styles/components/QueryComponents/Order.module.css'

import OrderItem from './Order/OrderItem'

const orderColumns = [
  'country_name',
  'country_code',
  'value',
  'indicator_name',
  'indicator_code',
  'year'
]

const Order = () => {

  return (
    <div className={styles.orderField}>
      { orderColumns.map((columnName, index) => {
        return (
          <OrderItem
            columnName={columnName}
            key={index}
          />
        )
      })}
    </div>
  )
}

export default Order;
