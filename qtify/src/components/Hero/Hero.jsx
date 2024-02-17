import heroImg from '../../assets/hero_headphones.png';
import styles from './Hero.module.css';


const Hero = () => {

  return (
    <div className={styles.hero_container}>
        <div className={styles.hero_content}>
            <p>100 Thousand Songs, ad-free <br/> Over thousands podcast episodes</p>
            <img src={heroImg} />
        </div>
    </div>
  )
}

export default Hero;