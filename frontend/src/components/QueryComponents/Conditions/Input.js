import styles from '@/styles/components/QueryComponents/Conditions/Input.module.css'

const Conditions = ({ columnName, placeholder, onChange, value }) => {

  return (
    <div className={styles.parent}>
      <label className={styles.label}>
        <p className={styles.text}>{columnName}</p>
        <input
          type="text"
          className={styles.input}
          placeholder={`Ex: ${placeholder}`}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

export default Conditions;
