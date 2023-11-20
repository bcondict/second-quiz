import styles from '@/styles/pages/PublicQueries.module.css'
import Layout from '@/components/Layout/Layout'
import QueryElement from '@/components/Queries/QueryElement'
import { useAuth } from '@/context/authContext'

const PublicQueries = () => {
  const { user } = useAuth()

  const publicQueries = () => {
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
        console.log(data)
      })
      .catch(err => {
        console.error('There has been a problem with your fetch operation: ', err)
      })
  }
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.publicQueries}>
          <h1 className={styles.title}>Public Queries</h1>
          <QueryElement
            className={styles.queryElement}
            user={user ? user.userName : 'Anonymous'}
            title="Query Title"
            description="Query Description"
          />
          <button onClick={publicQueries}>Click me</button>
        </div>
      </div>
    </Layout>
  )
}

export default PublicQueries
