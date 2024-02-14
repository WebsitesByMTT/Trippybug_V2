import Image from "next/image";
import styles from "./exploreNow.module.scss";
import Favourite from "../SVG/Favourite";
import LocationMarker from "../SVG/LocationMarker";

const ExploreNow = () => {
  return (
    <div className={styles[`explore-now`]}>
      <div className={styles.container}>
        <div className={styles.titles}>
          <h2>Explore Now</h2>
          <h3>Find Your Dream Destination</h3>
          <p>
            Finding The Perfect Travel Flight Is Like Uncovering A Hidden
            Treasure
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles[`image-container`]}>
              <Image
                src={"/exploreNow/1.png"}
                fill
                className={styles.image}
                alt="explore-now-image"
              />
            </div>
            <div className={styles.detail}>
              <div className={styles.location}>
                <LocationMarker />
                <h6>Maldives</h6>
              </div>

              <div className={styles.count}>
                <h5>01</h5>
              </div>
            </div>

            <div className={styles.fav}>
              <Favourite />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles[`right-titles`]}>
              <h4>
                Beautiful <span> Maldives </span> <br />
                Islands
              </h4>
              <p>
                Are you planning a trip to Indonesian? These breathtaking
                indoneasian islands are where you will find some of the best
                attarctions ....
                <span>more</span>
              </p>
            </div>

            <div className={styles[`right-content`]}>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <div className={styles[`image-container`]}>
                    <Image
                      src={"/exploreNow/2.png"}
                      fill
                      className={styles.image}
                      alt="explore-now-image"
                    />
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles[`image-container`]}>
                    <Image
                      src={"/exploreNow/3.png"}
                      fill
                      className={styles.image}
                      alt="explore-now-image"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.button}>
                <button>
                  <span>
                    <span>Explore </span>Maldives
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    height="15"
                    viewBox="0 0 200 15"
                    fill="none"
                    className={styles.arrow}
                  >
                    <path
                      d="M199.707 8.20711C200.098 7.81658 200.098 7.18342 199.707 6.79289L193.343 0.428932C192.953 0.0384078 192.319 0.0384078 191.929 0.428932C191.538 0.819457 191.538 1.45262 191.929 1.84315L197.586 7.5L191.929 13.1569C191.538 13.5474 191.538 14.1805 191.929 14.5711C192.319 14.9616 192.953 14.9616 193.343 14.5711L199.707 8.20711ZM0 8.5H199V6.5H0V8.5Z"
                      fill="black"
                    />
                  </svg>
                  <div className={styles.circle}></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreNow;
