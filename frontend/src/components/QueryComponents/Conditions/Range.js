import styles from '@/styles/components/QueryComponents/Columns/Range.module.css'

const Range = ({ className, label, isSelected, onCheckboxChange }) => {
  return (
    <label className={`${className} ${styles.range}`}>
      {label}
      <input
        type="range"
        min="0"
        max="100"
        // value="50"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
      />
    </label>
  )
}

export default Range
