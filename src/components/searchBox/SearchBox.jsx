import styles from "./searchBox.module.scss";

const SearchBox = () => {
  return (
    <div className={styles[`search-box`]}>
      <ul className={styles.tabs}>
        <li className={`${styles.active}`}>Flights</li>
        <li>Hotels</li>
        <li>Cars</li>
      </ul>
      <div className={styles[`search-box-container`]}>
        <ul>
          <li className={`${styles.items}`}>
            <input type="text" placeholder="From" />
          </li>
          <li className={styles.items}>
            <input type="text" placeholder="Destination" />
          </li>
          <li className={styles.items}>
            <input type="text" placeholder="Adults" />
          </li>
          <li className={styles.items}>
            <input type="text" placeholder="Category" />
          </li>
          <li className={styles.items}>
            <button>Search</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchBox;
