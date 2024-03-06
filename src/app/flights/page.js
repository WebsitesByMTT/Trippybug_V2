import Image from "next/image";
import styles from "./flights.module.scss";
import Navbar from "@/components/navbar/Navbar";
import Banner from "@/components/banner/Banner";
import Titles from "@/components/titles/Titles";
import SearchBox from "@/components/searchBox/SearchBox";
import Footer from "@/components/footer/Footer";
import { getPostsByCategoryName } from "../lib/data";
import FlightsSlider from "@/components/flightsSlider/FlightsSlider";

const Flights = async () => {
  const { edges: flightsData } = await getPostsByCategoryName("best-airlines");
  return (
    <>
      <Banner
        bg="/flights-bg.png"
        align="flex-end"
        title="Book your next adventure"
        desc="Experience the thrill of our most convenient flight with our creative travel options and wander through the sky effortlessly."
      />
      <div className={styles.flights}>
        <div className={styles.search}>
          <SearchBox />
        </div>
        <div className={styles.container}>
          <div className={styles.text}>
            <Titles
              title="TRENDING BLOG"
              subtitle="Find Your Dream Destination"
              desc="Explore our best-recommended selection of places and find your dream gateway"
            />
          </div>
          <div className={styles.content}>
            <FlightsSlider data={flightsData} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Flights;
