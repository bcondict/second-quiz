import styles from '@/styles/components/QueryComponents/Conditions/Input.module.css'

const Conditions = ({ label, example }) => {
  return (
    <div className={styles.parent}>
      <label className={styles.label}>
        <p className={styles.text}>{label}</p>
        <input
          type="text"
          className={styles.input}
          placeholder={`Ex: ${example}`}
          />
      </label>
    </div>
  )
}

export default Conditions;
