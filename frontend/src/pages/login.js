import styles from '@/styles/pages/login.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '@/context/authContext'

const Login = () => {
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    const url = 'http://localhost:5000/login'
    const loginData = {
      username: loginUsername,
      password: loginPassword,
    }
    const loginRequest = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData),
    }

    fetch(url, loginRequest)
      .then(res => {
        if (!res.ok) {
          alert('password or username is incorrect, please try again.')
          throw new Error('Network response was not ok')
        }
        return res.json()
      })
      .then(data => {
        localStorage.setItem('user', JSON.stringify(data));
        window.location.href = '/'
      })
      .catch(err => {
        console.error('There has been a problem with your fetch operation: ', err)
      })
  }

  return (
    // parent class
    <div className={styles.login}>

      {/* title  */}
      <h1 className={styles.title}>Log In</h1>

      {/* Login Container */}
      <div className={styles.loginContainer}>
        {/* image Logo */}
        <img src="/LogoHorizontal.png" alt="login" />

        {/* Login Form */}
        <form id="loginForm" className={styles.loginForm} onSubmit={handleLogin}>
          <input
            className={styles.field}
            type="text"
            placeholder="Username or Email"
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
            required
          />
          <input
            className={styles.field}
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
          <button className={styles.loginButton} type="submit">Sign In</button>
          <Link href="/register" className={styles.linkText}><p>Don't have an account? <span>Sign Up</span></p></Link>
        </form>
      </div>
    </div>
  )
}

export default Login
