import heroImg from '../../assets/hero_headphones.png';
import styles from './Hero.module.css';


const Hero = ({value}) => {

  return (
    <div className={styles.hero_container}>
        <div className={styles.hero_content}>
            <p>{value}</p>
            <img src={heroImg} />
        </div>
    </div>
  )
}

export default Hero;