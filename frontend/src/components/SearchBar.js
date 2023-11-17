import styles from '@/styles/components/SearchBar.module.css'
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';

const SearchBar = ({ onSubmit, className }) => {
  const [searchTerm, setSearchTerm] = useState('Select * from $Dataset ')

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(searchTerm)
  }

  return (
    <div className={`${className} ${styles.searchBar}`}>
      <SearchIcon className={styles.searchIcon}/>
      <input
        type="text"
        placeholder="Query"
        value={searchTerm}
        onChange={handleChange}
        className={styles.searchInput}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className={styles.submitButton}
      >
        Run Query
      </button>
    </div>
  )
}

export default SearchBar;
