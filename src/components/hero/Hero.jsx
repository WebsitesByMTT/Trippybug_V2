import Image from "next/image";
import styles from "./hero.module.scss";
import Navbar from "../navbar/Navbar";
import TimelineMap from "../SVG/TimelineMap";
import LocationMarker from "../SVG/LocationMarker";

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
            <div className={styles.bottom}>
              <div className={styles[`timeline`]}>
                <div className={styles.points}>
                  <LocationMarker />
                  <span>Yousmarg</span>
                </div>
                <div className={styles.points}>
                  <LocationMarker />
                  <span>Strawberry Valley</span>
                </div>

                <div className={styles.points}>
                  <LocationMarker />
                  <span>Pari Mahal</span>
                </div>

                <div className={styles.map}>
                  <TimelineMap className={styles.map} />
                </div>
              </div>
            </div>

            <div className={styles[`search-box`]}>
              <div className={styles.tabs}>
                <ul>
                  <li>Flights</li>
                  <li>Hotels</li>
                  <li>Cars</li>
                </ul>
              </div>
              <div className={styles[`search-box-container`]}>
                <div className={styles.items}>
                  <input type="text" placeholder="From" />
                </div>
                <div className={styles.items}>
                  <input type="text" placeholder="To" />
                </div>
                <div className={styles.items}>
                  <input type="text" placeholder="Date" />
                </div>
                <div className={styles.items}>
                  <input type="text" placeholder="Passengers" />
                </div>
                <div className={styles.items}>
                  <button>Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
