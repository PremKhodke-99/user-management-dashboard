import React from 'react'
import styles from './Navbar.module.css';

const Navbar = ({ formActive, setFormActive }) => {

  return (
    <nav className={styles.navbar}>
      <h1>User Management Dashboard</h1>
      <button className={styles.addNew}
        onClick={() => setFormActive(prev => !prev)}
      >
        {
          formActive ? "Close" : "Add user"
        }
      </button>
    </nav>
  )
}

export default Navbar