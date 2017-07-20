import React from 'react'
import Helmet from 'react-helmet'

import styles from './Home.css'

export default function Home() {
  return (
    <div className={styles.Home}>
      <Helmet title="Gousto - Home" />
      <p>Please select a category to continue</p>
    </div>
  )
}
