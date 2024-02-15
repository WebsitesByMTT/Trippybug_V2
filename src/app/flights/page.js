import Image from "next/image";
import styles from "./flights.module.scss";
import Navbar from "@/components/navbar/Navbar";
import Banner from "@/components/banner/Banner";
import Titles from "@/components/titles/Titles";

const Flights = () => {
  return (
    <>
      <Banner
        bg="/flights-bg.png"
        align="flex-end"
        title="Book your next adventure"
        desc="Experience the thrill of our most convenient flight with our creative travel options and wander through the sky effortlessly."
      />

      <div className={styles.flights}>
        <div className={styles.container}>
          <Titles
            title="TRENDING BLOG"
            subtitle="Find Your Dream Destination"
            desc="Explore our best-recommended selection of places and find your dream gateway"
          />

          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles[`image-container`]}>
                <Image className={styles.image} />
              </div>
            </div>
            <div className={styles.right}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flights;
