import styles from '@/styles/components/Queries/QueryElement.module.css'
import { useAuth } from '@/context/authContext'

const QueryElement = ({ user, title, description }) => {
  return (
    <div className={styles.queryElement}>
      <p className={styles.userName}>{user}</p>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <button className={styles.button}>Comment</button>
    </div>
  )
}
  
  export default QueryElement
  
