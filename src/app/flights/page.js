import Image from "next/image";
import styles from "./flights.module.scss";
import Navbar from "@/components/navbar/Navbar";

const Flights = () => {
  return (
    <>
      <div className={styles.flights}>
        <div className={styles[`bg-container`]}>
          <Image
            src={"/flights-bg.png"}
            fill
            className={styles.bg}
            alt="hero"
          />
        </div>
        <Navbar />
        <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.left}></div>
            <div className={styles.right}>
              <h1>Book your next adventure</h1>
              <p>
                Experience the thrill of our most convenient flight with our
                creative travel options and wander through the sky effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flights;
