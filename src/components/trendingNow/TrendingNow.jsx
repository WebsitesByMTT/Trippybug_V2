import Image from "next/image";
import styles from "./trendingNow.module.scss";
import { getPostsByCategoryName } from "@/app/lib/data";
import Link from "next/link";
import Cards from "./cards/Cards";


const TrendingNow = async () => {
  const trendingBlogs = await getPostsByCategoryName("trending");
  const data = trendingBlogs.edges;
  return (
    <div className={styles[`trending-now`]}>
      <div className={styles.container}>
        <div className={styles.titles}>
          <h2>TRENDING NOW</h2>
          <h3>Find Your Dream Destination</h3>
          <p>
            Finding The Perfect Travel Flight Is Like Uncovering A Hidden
            Treasure
          </p>
        </div>

        <div className={styles.content}>
          <Cards data={data} />
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
