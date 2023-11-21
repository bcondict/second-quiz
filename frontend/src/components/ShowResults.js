import styles from '@/styles/components/ShowResults.module.css'

const ShowResults = ({ result }) => {
  let resultString = JSON.stringify(result)
  const copyToClipboard = () => {
    navigator.clipboard.writeText(resultString)
    alert("Copied to clipboard!")
  }
  return (
    <div className={styles.result}>
      <botton className={styles.copyButton} onClick={copyToClipboard}>Copy</botton>
      <p>{JSON.stringify(result)}</p>
    </div>
  )
}

export default ShowResults
