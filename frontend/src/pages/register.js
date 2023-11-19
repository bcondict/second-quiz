import styles from '@/styles/pages/register.module.css'
import Link from 'next/link'
import { useState } from 'react'

const Register = () => {
  const [registerUsername, setRegisterUsername] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()

    if (registerPassword !== registerConfirmPassword) {
      console.log('Passwords do not match')
      return
    }

    const url = 'http://localhost:5000/register'
    const registerData = {
      username: registerUsername,
      email: registerEmail,
      password: registerPassword,
    }
    const registerRequest = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registerData),
    }

    fetch(url, registerRequest)
      .then(res => {
        if (!res.ok) {
          alert('Registration failed. Please try again.')
          throw new Error('Network response was not ok')
        }
        window.location.href = '/login'
        return res.json()
      })
      .then(data => {
        console.log('Data received: ', data);
      })
      .catch(err => {
        console.error('There has been a problem with your fetch operation: ', err)
      })
  }


  return (
    // parent class
    <div className={styles.register}>

      {/* Title */}
      <h1 className={styles.title}>Register</h1>

      {/* Login Container */}
      <div className={styles.registerContainer}>
        {/* Image Logo */}
        <img src="/LogoHorizontal.png" alt="login" />

        {/* Register Form */}
        <form id="registerForm" className={styles.registerForm} onSubmit={handleRegister}>
          <input
            className={styles.field}
            type="text"
            placeholder="Username"
            value={registerUsername}
            onChange={(e) => setRegisterUsername(e.target.value)}
            required
          />
          <input
            className={styles.field}
            type="email"
            placeholder="Email"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
            required
          />
          <input
            className={styles.field}
            type="password"
            placeholder="Password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
            required
          />
          <input
            className={styles.field}
            type="password"
            placeholder="Confirm Password"
            value={registerConfirmPassword}
            onChange={(e) => setRegisterConfirmPassword(e.target.value)}
            required
          />
          <div className={styles.buttons}>
            {/* Cancel button */}
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
            {/* Sign Up Button */}
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
