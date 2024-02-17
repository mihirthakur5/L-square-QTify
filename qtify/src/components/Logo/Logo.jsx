import logo from '../../assets/logo.png'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logo}>
       <img src={logo} alt='QTify Logo' />
    </div>
  )
}

export default Logo;