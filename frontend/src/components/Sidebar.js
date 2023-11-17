import styles from '@/styles/components/Sidebar.module.css'
import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import {Home, ChevronRight, ChevronLeft, Public, Person, Favorite} from '@material-ui/icons';


const sidebarItems = [
  {
    name: 'Home',
    href: '/',
    icon: Home
  },
  {
    name: 'Saved Queries',
    href: '/SavedQueries',
    icon: Favorite 
  },
  {
    name: 'Public Queries',
    href: '/PublicQueries',
    icon: Public 
  },
]

const Sidebar = ({ className, ...props }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className={styles.sidebarWrapper} >
      {/* Button */}
      <button className={`${styles.sidebarButton} ${isCollapsed ? styles.collapsed : ''}`} onClick={toggleSidebar}>
        {isCollapsed ? <ChevronRight className={styles.arrow}/> : <ChevronLeft className={styles.arrow}/>}
      </button>

      {/* Sidebar */}
      <aside className={styles.sidebar} data-collapse={isCollapsed}>
        {/* logo */}
        <div className={styles.sidebarTop}>
          <Image
            // src="/Logo.png"
            src={isCollapsed ? "/LogoSmall.png" : "/Logo.png"}
            height={100}
            width={137}
            alt="Logo"
            className={styles.sidebarLogo}
          />
        </div>
        {/* elements */}
        <ul className={styles.sidebarList}>
          {sidebarItems.map(({name, href, icon: Icon}, index) => {
            return (
              <li key={index} className={styles.sidebarItem}>
                <Link href={href}>
                  <Icon className={styles.sidebarIcon}/>
                  <span className={styles.sidebarName}>{name}</span>
                </Link>
              </li>
            )
          })}
        </ul>

        <div className={styles.user}>
          <button className={styles.userButton}>
            <Person className={styles.userIcon}/>
            <span className={styles.userName}>Bcondict</span>
          </button>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar;
