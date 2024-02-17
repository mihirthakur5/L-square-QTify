import logo from '../../assets/logo.png'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <img src={logo} alt='QTify Logo' className={styles.logo} />
  )
}

export default Logo;