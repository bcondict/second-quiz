'use client';
import styles from '@/styles/pages/profile.module.css'
import Layout from '@/components/Layout/Layout'
import { useAuth, useLogout } from '@/context/authContext'
import Image from 'next/image'

const Profile = () => {
  const { user } = useAuth();
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Profile</h1>
        <div className={styles.profile}>
          <Image
            src={"/UserLogo.png"}
            alt="user image"
            width={120}
            height={120}
            className={styles.image}
          />
          <p className={styles.userName}>{user ? user.userName : ''}</p>
          <p className={styles.userEmail}>{user ? user.userEmail : ''}</p>
          <button
            className={`${styles.button} ${styles.signOff}`}
            onClick={useLogout}
          >
            Sign off
          </button>
          <button
            className={`${styles.button} ${styles.deleteAcount}`}
          >
            Delete Account
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Profile;
