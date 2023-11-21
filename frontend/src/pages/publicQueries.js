import styles from '@/styles/pages/PublicQueries.module.css'
import Layout from '@/components/Layout/Layout'
import QueryElement from '@/components/Queries/QueryElement'
import { useState, useEffect } from 'react'

const PublicQueries = () => {
  const [queries, setQueries] = useState([])

  useEffect(() => {
    const url = 'http://localhost:5000/queries'

    const publicQueriesRequest = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }

    fetch(url, publicQueriesRequest)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        return res.json()
      })
      .then(data => {
        setQueries(data.queries)
      })
      .catch(err => {
        console.error('There has been a problem with your fetch operation: ', err)
      })
  }, [])

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.publicQueries}>
          <h1 className={styles.title}>Public Queries</h1>
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

export default PublicQueries
