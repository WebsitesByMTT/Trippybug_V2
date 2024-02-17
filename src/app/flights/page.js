import Image from "next/image";
import styles from "./flights.module.scss";
import Navbar from "@/components/navbar/Navbar";
import Banner from "@/components/banner/Banner";
import Titles from "@/components/titles/Titles";
import SearchBox from "@/components/searchBox/SearchBox";
import Footer from "@/components/footer/Footer";

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
        <SearchBox />

        <div className={styles.container}>
          <Titles
            title="TRENDING BLOG"
            subtitle="Find Your Dream Destination"
            desc="Explore our best-recommended selection of places and find your dream gateway"
          />

          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles[`image-container`]}>
                <Image
                  src={"/flights-left.png"}
                  alt="flights-left-img"
                  fill
                  className={styles.image}
                />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.titles}>
                <h3>Explore the world with us</h3>
                <p>
                  Plan your next adventure with us and create your precious
                  memories. This is the most convenient website that invites you
                  to discover the whole world in one place. Whether it is
                  bustling cities or sunny beaches, each destination is waiting
                  for you. By booking the cheapest airline and flight tickets
                  with us, fulfill your most awaited dream. So pack your bags
                  and tighten your seatbelts as you are joining us to travel the
                  whole planet.
                </p>
              </div>

              <button>
                <span>Read More</span>

                <svg
                  width="68"
                  height="12"
                  viewBox="0 0 68 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M67.0303 6.53033C67.3232 6.23744 67.3232 5.76256 67.0303 5.46967L62.2574 0.696699C61.9645 0.403806 61.4896 0.403806 61.1967 0.696699C60.9038 0.989593 60.9038 1.46447 61.1967 1.75736L65.4393 6L61.1967 10.2426C60.9038 10.5355 60.9038 11.0104 61.1967 11.3033C61.4896 11.5962 61.9645 11.5962 62.2574 11.3033L67.0303 6.53033ZM0 6.75H66.5V5.25H0V6.75Z"
                    fill="#FF991A"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Flights;
