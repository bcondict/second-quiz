import styles from '@/styles/components/QueryComponents/Columns/Checkbox.module.css'

const Checkbox = ({ className, label, isSelected, onChange }) => {
  return (
    <label className={`${className} ${styles.checkbox}`}>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onChange}
      />
      {label}
    </label>
  )
}

export default Checkbox
