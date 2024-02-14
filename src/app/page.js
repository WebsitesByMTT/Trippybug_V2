import Image from "next/image";
import styles from "./page.module.scss";
import Hero from "@/components/hero/Hero";
import ExploreNow from "@/components/exploreNow/ExploreNow";
import TrendingNow from "@/components/trendingNow/TrendingNow";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <ExploreNow />
      <TrendingNow />
    </main>
  );
}
