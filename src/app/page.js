import Image from "next/image";
import styles from "./page.module.scss";
import Footer from "@/components/footer/Footer";
import TopDestination from "@/components/topDestination/TopDestination";

import Hero from "@/components/hero/Hero";
import ExploreNow from "@/components/exploreNow/ExploreNow";
import TrendingNow from "@/components/trendingNow/TrendingNow";

export default function Home() {
  return (
    <>
      <Hero />
      <ExploreNow />
      <TrendingNow />
      <TopDestination />
      <Footer />
    </>
  );
}
