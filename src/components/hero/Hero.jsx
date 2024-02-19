import Image from "next/image";
import styles from "./hero.module.scss";
import Navbar from "../navbar/Navbar";
import TimelineMap from "../SVG/TimelineMap";
import LocationMarker from "../SVG/LocationMarker";
import SearchBox from "../searchBox/searchBox";
import KashmirTimeline from "../SVG/KashmirTimeline";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles[`bg-container`]}>
          <Image src={"/bg.png"} width={1000} height={1000} className={styles.bg} alt="hero" />
        </div>
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
            <div className={styles.bottom}>
              <div className={styles.map}>
                <KashmirTimeline className={styles.map} />
              </div>
            </div>

            <SearchBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
