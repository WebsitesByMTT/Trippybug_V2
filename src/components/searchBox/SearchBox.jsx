"use client";
import { Suspense, useState } from "react";
import styles from "./searchBox.module.scss";
import KiwiForm from "../kiwiForm/KiwiForm";
import Loading from "@/app/loading";

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
        {activeTab === "Flights" && (
          <iframe
            src="//www.travelpayouts.com/widgets/22205c47ab682a18e67bf3138082cce3.html?v=2203"
            scrolling="no"
            frameBorder="0"
            allowFullScreen="true"
            className={styles.flights}
          ></iframe>
        )}
        {activeTab === "Hotels" && (
          <iframe
            src="//www.travelpayouts.com/widgets/c2fcc9c9f099c9a7e5502aa4dea71d3d.html?v=2267"
            scrolling="no"
            frameBorder="0"
            className={styles.hotels}
          ></iframe>
        )}
        {activeTab === "Cars" && (
          <iframe
            scrolling="no"
            frameBorder="0"
            src={"/kiwi-form"}
            className={styles.cars}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBox;
