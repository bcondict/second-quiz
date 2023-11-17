import styles from '@/styles/pages/register.module.css'
import Link from 'next/link'

const Register = () => {
  return (
    <div className={styles.register}>
      <h1 className={styles.title}>Register</h1>
      <div className={styles.registerContainer}>
        <img src="/LogoHorizontal.png" alt="login" />
        <form className={styles.registerForm}>
          <input className={styles.field} type="text" placeholder="Username" />
          <input className={styles.field} type="email" placeholder="Email" />
          <input className={styles.field} type="password" placeholder="Password" />
          <input className={styles.field} type="password" placeholder="Confirm Password" />
          <div className={styles.buttons}>
            <button
              className={`${styles.registerButton} ${styles.cancelButton}`} 
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                window.location.href = '/'
              }}
            >
              Cancel
            </button>
            <button
              className={styles.registerButton}
              type="submit"
            >Sign Up</button>
          </div>
          <Link href="/login" className={styles.linkText}><p>Already have an account? <span>Sing In</span></p></Link>
        </form>
      </div>
    </div>
  )
}

export default Register
