import Image from "next/image";
import styles from "./page.module.scss";

import { getPostsByCategoryName } from "./lib/data";
import Titles from "@/components/titles/Titles";
import Favourite from "@/components/SVG/Favourite";
import TrendingNowSlider from "@/components/trendingNowSlider/TrendingNowSlider";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import ExploreNow from "@/components/exploreNowContent/ExploreNowContent";
import ExploreNowContent from "@/components/exploreNowContent/ExploreNowContent";
import Link from "next/link";

const Home = async () => {
  const { edges: exploreNowData } = await getPostsByCategoryName(
    "explore-the-world"
  );
  const { edges: trendingNowData } = await getPostsByCategoryName("trending");

  const { edges: lookingForInspiration } = await getPostsByCategoryName(
    "looking-for-inspiration",
    3
  );

  const { edges: topDestination } = await getPostsByCategoryName(
    "popular-recommended-hotels",
    6
  );

  return (
    <>
      {/* Hero  */}
      <Hero />

      {/* Explore Now  */}
      <section className={styles[`explore-now`]} id="explore-now">
        <div className={styles.container}>
          <Titles
            title="Explore Now"
            subtitle="Find Your Dream Destination"
            desc="Finding The Perfect Travel Flight Is Like Uncovering A Hidden Treasure"
          />
          <ExploreNowContent exploreNowData={exploreNowData} />
        </div>
      </section>

      {/* Trending Now  */}
      <section className={styles[`trending-now`]} id="trending-now">
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
      <section className={styles.topDestination} id="top-destination">
        <div className={styles.container}>
          <Titles
            title="Top Destination"
            subtitle="Not Sure Where To Start ?"
            desc="See where others are travelling and follow their trails"
          />

          <div className={styles.content}>
            <div className={styles.cards}>
              {topDestination.map((item) => {
                return (
                  <Link
                    href={`/${item?.node?.slug}`}
                    className={styles.card}
                    key={item?.node?.postId}
                  >
                    <div className={styles[`image-container`]}>
                      <Image
                        src={item?.node?.featuredImage?.node?.sourceUrl}
                        alt={item?.node?.title}
                        fill
                        className={styles.image}
                      />
                    </div>

                    <div className={styles.detail}>
                     

                      <div className={styles[`detail-titles`]}>
                        <h6>{item?.node?.title}</h6>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item?.node?.excerpt,
                          }}
                          className={styles.desc}
                        />
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
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Looking for inspiration */}
      <section
        className={styles.lookingForInspiration}
        id="looking-for-inspiration"
      >
        <div className={styles.container}>
          <Titles
            title="looking for inspiration"
            subtitle="Not Sure Where To Start?"
            desc="See where others are travelling and follow their trails."
          />

          <div className={styles.content}>
            <div className={styles.cards}>
              {lookingForInspiration.map((e) => {
                return (
                  <Link
                    href={`/${e?.node?.slug}`}
                    className={styles.card}
                    key={e?.id}
                  >
                    <div className={styles[`image-container`]}>
                      <Image
                        src={e?.node?.featuredImage?.node?.sourceUrl}
                        alt={e?.node?.title}
                        fill
                        className={styles.image}
                      />
                    </div>

                    <div className={styles.detail}>
                      <div className={styles[`detail-titles`]}>
                        <h6>{e?.node?.title}</h6>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: e?.node?.excerpt,
                          }}
                          className={styles.desc}
                        />
                      </div>
                    </div>
                  </Link>
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
