import React, { useState } from 'react';

import styles from '@/styles/pages/Home.module.css'

import QueryComponents from '@/components/QueryComponents'
import SearchBar from '@/components/SearchBar'
import Sidebar from '@/components/Sidebar'
import SaveQueryButton from '@/components/SaveQueryButton'
import Layout from '@/components/Layout/Layout'
import ShowResults from '@/components/ShowResults'
import useEffect from 'react'



export default function Home() {
  const [result, setResult] = useState(null)

  const handleChange = (searchTerm) => {
    console.log(searchTerm)
    const runQuery = () => {
      const url = 'http://localhost:5000/bigQuery'
  
      const bigQueryRequest = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({queryString: searchTerm})
      }

      fetch(url, bigQueryRequest)
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok')
          }
          return res.json()
        })
        .then(data => {
          console.log("data", data)
          setResult(data)
        })
        .catch(err => {
          console.error('There has been a problem with your fetch operation: ', err)
        })
    }
    runQuery()
  }

  return (
    <Layout>
      <h1 className={styles.header}>Visual Query Builder</h1>
      <SearchBar className={styles.searchBar} onSubmit={handleChange}/>
      <QueryComponents className={styles.queryComponents}/>
      <SaveQueryButton className={styles.saveQueryButton}/>
      {/* <div><p>{JSON.stringify(result)}</p></div> */}
      <ShowResults result={result}/>
    </Layout>
  )
}
