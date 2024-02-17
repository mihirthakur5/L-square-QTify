import styles from './Searchbar.module.css'
import searchIcon from '../../assets/search-icon.svg'

const Searchbar = () => {
  return (
    <div className={styles.container}>
        <input className={styles.search} name='search' type="text" placeholder='Search a album of your choice'/>
        <button style={styles.searchButton} type='submit'>
            <img src={searchIcon} alt="" width={18} height={18} />
        </button>
    </div>
  )
}

export default Searchbar;