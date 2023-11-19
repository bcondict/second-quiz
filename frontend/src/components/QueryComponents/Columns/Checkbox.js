import styles from '@/styles/components/QueryComponents/Columns/Checkbox.module.css'

const Checkbox = ({ className, columnName, isSelected, onChange }) => {
  return (
    <label className={`${className} ${styles.checkbox}`}>
      <input
        type="checkbox"
        name={columnName}
        checked={isSelected}
        onChange={onChange}
      />
      {columnName}
    </label>
  )
}

export default Checkbox
