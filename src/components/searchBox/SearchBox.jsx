"use client";
import { useState } from "react";
import styles from "./searchBox.module.scss";

const SearchBox = () => {
  const [activeTab, setActiveTab] = useState("Flights"); // Assuming 'Flights' is the default active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className={styles[`search-box`]}>
      <ul className={styles.tabs}>
        <li
          className={`${styles.tab} ${
            activeTab === "Flights" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("Flights")}
        >
          Flights
        </li>
        <li
          className={`${styles.tab} ${
            activeTab === "Hotels" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("Hotels")}
        >
          Hotels
        </li>
        <li
          className={`${styles.tab} ${
            activeTab === "Cars" ? styles.active : ""
          }`}
          onClick={() => handleTabClick("Cars")}
        >
          Cars
        </li>
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
