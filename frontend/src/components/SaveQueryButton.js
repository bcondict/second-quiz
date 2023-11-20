import styles from '@/styles/components/SaveQueryButton.module.css'
import Link from 'next/link'

const SaveQueryButton = () => {
  return (
    <button className={styles.saveQuery}>
      <Link href="/saveQuery" >
        Save Query
      </Link>
    </button>
  )
}

export default SaveQueryButton;
