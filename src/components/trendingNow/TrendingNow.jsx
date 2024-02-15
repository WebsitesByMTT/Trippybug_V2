import Image from "next/image";
import styles from "./trendingNow.module.scss";
import { getPostsByCategoryName } from "@/app/lib/data";
import Link from "next/link";
import Cards from "./cards/Cards";
import Titles from "../titles/Titles";

const TrendingNow = async () => {
  const trendingBlogs = await getPostsByCategoryName("trending");
  const data = trendingBlogs.edges;
  return (
    <div className={styles[`trending-now`]}>
      <div className={styles.container}>
        <Titles
          title="TRENDING NOW"
          subtitle="Find Your Dream Destination"
          desc="Finding The Perfect Travel Flight Is Like Uncovering A Hidden Treasure"
        />
        <div className={styles.content}>
          <Cards data={data} />
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
