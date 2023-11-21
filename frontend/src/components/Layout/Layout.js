import styles from '@/styles/components/Layout/Layout.module.css'
import Head from 'next/head'
import Sidebar from '@/components/Sidebar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Visual Query Builder, ver+ tech fellowship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.Layout}>
          <Sidebar />
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </main>
    </>
  );
}

export default Layout;
