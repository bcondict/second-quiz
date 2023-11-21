import styles from '@/styles/pages/SavedQueries.module.css'
import Layout from '@/components/Layout/Layout'
import QueryElement from '@/components/Queries/QueryElement'
import { useState, useEffect } from 'react'

const SavedQueries = () => {
  const [queries, setQueries] = useState([])

  useEffect(() => {
    const url = 'http://localhost:5000/queries'
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)

    const userData = {
      user: user
    }
    const publicQueriesRequest = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    }

    fetch(url, publicQueriesRequest)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        return res.json()
      })
      .then(data => {
        // console.log(data)
        setQueries(data.queries)
      })
      .catch(err => {
        console.error('There has been a problem with your fetch operation: ', err)
      })
  }, [])

  console.log(queries)

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.publicQueries}>
          <h1 className={styles.title}>Saved Queries</h1>
          { queries.map((query, index) => (
            <QueryElement
              key={index}
              className={styles.queryElement}
              user={query.user}
              title={query.queryName}
              description={query.queryDescription}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default SavedQueries;
