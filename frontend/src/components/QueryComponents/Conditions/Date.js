import styles from '@/styles/components/QueryComponents/Columns/Date.module.css'

const Date = ({ className, label }) => {
  return (
    <label className={`${className} ${styles.date}`}>
      <span className={styles.text}>{label}</span>
      <div>
        <input
          type="date"
          name="date"
        />
        <p>To</p>
        <input
          type="date"
          name="date"
        />
      </div>
    </label>
  )
}

export default Date
