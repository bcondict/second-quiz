import styles from '@/styles/components/SearchBar.module.css'
import SearchIcon from '@material-ui/icons/Search';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { generateQueryString  } from '@/redux/reducers/generateQuery'

const SearchBar = ({ onSubmit, className }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const checkboxStates = useSelector(state => state.checkboxReducer)
  const conditionStates = useSelector(state => state.inputReducer)
  const orderStates = useSelector(state => state.orderReducer)

  useEffect(() => {
    setSearchTerm(generateQueryString(checkboxStates, conditionStates, orderStates))
  }, [checkboxStates, conditionStates, orderStates])

  if (typeof sessionStorage !== 'undefined' && sessionStorage !== null)
    sessionStorage.setItem('queryString', JSON.stringify(searchTerm))

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(searchTerm)
  }

  return (
    <div className={`${className} ${styles.searchBar}`} >
      <SearchIcon className={styles.searchIcon}/>
      <input
        id="searchInput"
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
