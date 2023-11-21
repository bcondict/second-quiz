'use client';
import styles from '@/styles/pages/saveQuery.module.css'
import Layout from '@/components/Layout/Layout'
import Link from 'next/link'

import { useState } from 'react'

const SaveQuery = () => {
  const is_valid = (typeof sessionStorage !== 'undefined' && sessionStorage !== null)
  const queryString = is_valid ? sessionStorage.getItem('queryString') : ''
  const [queryName, setQueryName] = useState('')
  const [queryDescription, setQueryDescription] = useState('')

  const handleSave = (e) => {
    e.preventDefault()

    const url = 'http://localhost:5000/saveQuery'
    const saveData = {
      queryName: queryName,
      queryDescription: queryDescription,
      queryString: queryString,
      user: JSON.parse(localStorage.getItem('user')),
    }
    console.log("Send: ", saveData)
    const saveRequest = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(saveData),
    }

    fetch(url, saveRequest)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        return res.json()
      })
      .then(data => {
        console.log("received: ", data)
        window.location.href = '/savedQueries'
      })
      .catch(err => {
        console.error('There has been a problem with your fetch operation ' )
      })
  }

  return (
    <Layout>
      {/* Container */}
      <div className={styles.container}>

        {/* Title */}
        <h1 className={styles.title}>Save Query</h1>

        {/* Content */}
        <form className={styles.queryContent} >
          {/* Name of the Query */}
          <input
            type="text"
            placeholder="Query Name"
            className={styles.queryName}
            onChange={(e) => setQueryName(e.target.value)}
            required
          />
          {/* Description of the query */}
          <input
            type="text"
            placeholder="Query Description"
            className={styles.queryDescription}
            onChange={(e) => setQueryDescription(e.target.value)}
            required
          />
          {/* Query String */}
          <p className={styles.queryString}>
            {queryString}
          </p>
        </form>

        {/* Buttons */}
        <div className={styles.buttons}>
          <button>
            <Link href="/">
              Cancel
            </Link>
          </button>
          <button onClick={handleSave}>
            {/* <Link href="/savedQueries"> */}
              Save
            {/* </Link> */}
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default SaveQuery;
