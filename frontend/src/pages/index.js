import React, { useState } from 'react';

import styles from '@/styles/pages/Home.module.css'

import QueryComponents from '@/components/QueryComponents'
import SearchBar from '@/components/SearchBar'
import Sidebar from '@/components/Sidebar'
import SaveQueryButton from '@/components/SaveQueryButton'
import Layout from '@/components/Layout/Layout'


export default function Home() {

  const handleChange = (searchTerm) => {
    console.log(searchTerm)
  }

  return (
    <Layout>
      <h1 className={styles.header}>Visual Query Builder</h1>
      <SearchBar className={styles.searchBar} onSubmit={handleChange}/>
      <QueryComponents className={styles.queryComponents}/>
      <SaveQueryButton className={styles.saveQueryButton}/>
    </Layout>
  )
}
