import React from 'react'
import styles from './Navbar.module.css'
import Logo from '../Logo/Logo'
import Searchbar from '../Searchbar/Searchbar'
import Button from '../Buttons/Button'

const Navbar = () => {
  return (
    <>
        <nav className={styles.Navbar}>
            <Logo/>
            <Searchbar/>
            <Button/>
        </nav>
    </>
  )
}

export default Navbar;