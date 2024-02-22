import Banner from "@/components/banner/Banner";
import styles from "./hotels.module.scss";
import Titles from "@/components/titles/Titles";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import { getPostsByCategoryName } from "../lib/data";
import TrendingNowSlider from "@/components/trendingNowSlider/TrendingNowSlider";

const Hotels = async () => {
  const { edges: trendingBlogs } = await getPostsByCategoryName("trending");
  return (
    <>
      <Banner
        bg="/hotels-bg.png"
        align="flex-start"
        title="Find top Hotels at popular destinations"
      />

      <div className={styles.hotels}>
        <div className={styles.container}>
          <Titles
            title="TRENDING BLOG"
            subtitle="Find Your Dream Destination"
            desc="Explore our best-recommended selection of places and find your dream gateway"
          />

          <div className={styles.content}>
            <TrendingNowSlider data={trendingBlogs} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hotels;
