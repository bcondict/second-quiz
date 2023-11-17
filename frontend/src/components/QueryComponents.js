import styles from '@/styles/components/QueryComponents.module.css'

import Columns from './QueryComponents/Columns'
import Order from './QueryComponents/Order'
import Conditions from './QueryComponents/Conditions'



const QueryComponents = ({ className, ...props }) => {
  return (
    <div className={`${className} ${styles.queryComponents}`} {...props}>
      <div className={`${styles.querySection} ${styles.columns}`}>
        <p>Columns</p>
        <Columns />
      </div>

      <div className={`${styles.querySection} ${styles.conditions}`}>
        <p>Conditions</p>
        <Conditions />
      </div>

      <div className={`${styles.querySection} ${styles.order}`}>
        <p>Order</p>
        <Order />
      </div>

    </div>
  );
}

export default QueryComponents;
