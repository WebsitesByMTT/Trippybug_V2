import Image from "next/image";
import styles from "./hero.module.scss";
import Navbar from "../navbar/Navbar";
import TimelineMap from "../SVG/TimelineMap";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <Navbar />
        <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.top}>
              <div className={styles.left}>
                <div className={styles.titles}>
                  <h1>Plan your trip to Kashmir.</h1>
                  <p>
                    Figma ipsum component variant main layer. Pen flatten
                    scrolling object community pen reesizing. Variant stroke.
                  </p>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.map}>
                  <Image
                    src={"/jandk.png"}
                    alt="J&K"
                    width={410}
                    height={386}
                    className={styles.image}
                  />
                </div>
              </div>
            </div>
            <div className={styles.bottom}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
