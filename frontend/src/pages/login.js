import styles from '@/styles/pages/login.module.css'
import Link from 'next/link'

const Login = () => {
  return (
    <div className={styles.login}>
      <h1 className={styles.title}>Log In</h1>
      <div className={styles.loginContainer}>
        <img src="/LogoHorizontal.png" alt="login" />
        <form className={styles.loginForm}>
          <input className={styles.field} type="text" placeholder="Username or Email" />
          <input className={styles.field} type="password" placeholder="Password" />
          <button className={styles.loginButton} type="submit">Sign In</button>
          <Link href="/register" className={styles.linkText}><p>Don't have an account? <span>Sign Up</span></p></Link>
        </form>
      </div>
    </div>
  )
}

export default Login
