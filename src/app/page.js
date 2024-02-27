import Image from "next/image";
import styles from "./page.module.scss";

import { getPostsByCategoryName } from "./lib/data";
import Titles from "@/components/titles/Titles";
import LocationMarker from "@/components/SVG/LocationMarker";
import Favourite from "@/components/SVG/Favourite";
import ExploreNowSlider from "@/components/exploreNowSlider/ExploreNowSlider";
import TrendingNowSlider from "@/components/trendingNowSlider/TrendingNowSlider";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";

const topDestinationData = [
  {
    id: 1,
    imageSrc: "/topDestination/1.png",
    name: "Paris",
    reviews: 245,
  },
  {
    id: 2,
    imageSrc: "/topDestination/2.png",
    name: "Mount fuji",
    reviews: 320,
  },
  { id: 3, imageSrc: "/topDestination/3.png", name: "Bali", reviews: 180 },
  {
    id: 4,
    imageSrc: "/topDestination/4.png",
    name: "Switzerland",
    reviews: 180,
  },
  { id: 5, imageSrc: "/topDestination/5.png", name: "Tokyo", reviews: 180 },
  { id: 6, imageSrc: "/topDestination/6.png", name: "Berlin", reviews: 180 },
];

const Home = async () => {
  const { edges: exploreNowData } = await getPostsByCategoryName(
    "explore-the-world"
  );
  const { edges: trendingNowData } = await getPostsByCategoryName("trending");

  return (
    <>
      {/* Hero  */}
      <Hero />

      {/* Explore Now  */}
      <section className={styles[`explore-now`]}>
        <div className={styles.container}>
          <Titles
            title="Explore Now"
            subtitle="Find Your Dream Destination"
            desc="Finding The Perfect Travel Flight Is Like Uncovering A Hidden Treasure"
          />
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles[`image-container`]}>
                <Image
                  src={"/exploreNow/1.png"}
                  className={styles.image}
                  alt="explore-now-image"
                  width={1000}
                  height={1000}
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
                <ExploreNowSlider data={exploreNowData} />

                <div className={styles.button}>
                  <button>
                    <span>
                      <span>Explore </span>Maldives
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
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
      </section>

      {/* Trending Now  */}
      <section className={styles[`trending-now`]}>
        <div className={styles.container}>
          <div className={styles.text}>
            <Titles
              title="Trending Now"
              subtitle="Find Your Dream Destination"
              desc="Finding The Perfect Travel Flight Is Like Uncovering A Hidden Treasure"
            />
          </div>
          <div className={styles.content}>
            <TrendingNowSlider data={trendingNowData} />
          </div>
        </div>
      </section>

      {/* Top Destination  */}
      <section className={styles.topDestination}>
        <div className={styles.container}>
          <Titles
            title="Top Destination"
            subtitle="Not Sure Where To Start ?"
            desc="See where others are travelling and follow their trails"
          />

          <div className={styles.content}>
            <div className={styles.cards}>
              {topDestinationData.map((e) => {
                return (
                  <div className={styles.card} key={e.id}>
                    <div className={styles[`image-container`]}>
                      <Image
                        src={e.imageSrc}
                        alt="image"
                        fill
                        className={styles.image}
                      />
                    </div>

                    <div className={styles.detail}>
                      <div className={styles.fav}>
                        <Favourite />
                      </div>

                      <div className={styles[`detail-titles`]}>
                        <h6>{e.name}</h6>
                        <p>{e.reviews}reviews</p>
                      </div>
                      <div className={styles.btn}>
                        <button>
                          Explore
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="16"
                            viewBox="0 0 50 16"
                            fill="none"
                          >
                            <path
                              d="M49.7071 8.70711C50.0976 8.31658 50.0976 7.68342 49.7071 7.29289L43.3431 0.928932C42.9526 0.538408 42.3195 0.538408 41.9289 0.928932C41.5384 1.31946 41.5384 1.95262 41.9289 2.34315L47.5858 8L41.9289 13.6569C41.5384 14.0474 41.5384 14.6805 41.9289 15.0711C42.3195 15.4616 42.9526 15.4616 43.3431 15.0711L49.7071 8.70711ZM0 9H49V7H0V9Z"
                              fill="#2B27EB"
                              fillOpacity="0.86"
                            />
                          </svg>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
