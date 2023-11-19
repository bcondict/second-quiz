'use client';
import styles from '@/styles/pages/profile.module.css'
import Layout from '@/components/Layout/Layout'
import { useAuth } from '@/context/authContext'

const Profile = () => {
  const { user } = useAuth();
  return (
    <Layout>
      <div className={styles.profile}>
        <h1>Profile</h1>

        <div className={styles.profileInfo}>
          <div className={styles.profileInfoItem}>
            <p>Username</p>
            <p>{user ? user.userName : ''}</p>
          </div>
          <div className={styles.profileInfoItem}>
            <p>Email</p>
            <p>{user ? user.userEmail : ''}</p>
          </div>
        </div>
      </div>

      <button className={styles.button}>Log Out</button>
    </Layout>
  )
}

export default Profile;
