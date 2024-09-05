"use client";
import styles from "@/styles/components/Sidebar.module.css";
import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import {
  Home,
  ChevronRight,
  ChevronLeft,
  Public,
  Person,
  Favorite,
} from "@material-ui/icons";
import { useAuth } from "@/context/authContext";

const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Saved Queries",
    href: "/savedQueries",
    icon: Favorite,
  },
  {
    name: "Public Queries",
    href: "/publicQueries",
    icon: Public,
  },
];

const Sidebar = ({ className, ...props }) => {
  const { user } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.sidebarWrapper}>
      {/* Button */}
      <button
        className={`${styles.sidebarButton} ${isCollapsed ? styles.collapsed : ""}`}
        onClick={toggleSidebar}
      >
        {isCollapsed ? (
          <ChevronRight className={styles.arrow} />
        ) : (
          <ChevronLeft className={styles.arrow} />
        )}
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
          {sidebarItems.map(({ name, href, icon: Icon }, index) => {
            return (
              <Link key={index} href={href}>
                <li className={styles.sidebarItem}>
                  <Icon className={styles.sidebarIcon} />
                  <span className={styles.sidebarName}>{name}</span>
                </li>
              </Link>
            );
          })}
        </ul>

        {user ? (
          <Link className={styles.user} href="/profile">
            <button className={styles.userButton}>
              <Person className={styles.userIcon} />
              <span className={styles.userName}>{user.userName}</span>
            </button>
          </Link>
        ) : (
          <Link className={styles.user} href="/login">
            <button className={styles.userButton}>
              <Person className={styles.userIcon} />
              <span className={styles.userName}>Sign In</span>
            </button>
          </Link>
        )}
      </aside>
    </div>
  );
};

export default Sidebar;
