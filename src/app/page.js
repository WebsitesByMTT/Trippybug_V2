import Image from "next/image";
import styles from "./page.module.scss";
import Footer from "@/components/footer/Footer";
import TopDestination from "@/components/topDestination/TopDestination";

import Hero from "@/components/hero/Hero";
import ExploreNow from "@/components/exploreNow/ExploreNow";
import TrendingNow from "@/components/trendingNow/TrendingNow";
import Stories from "@/components/blogs/stories/Stories";


export default function Home() {
  return (
    <>
      <Stories />
      <Hero />
      <ExploreNow />
      <TrendingNow />
      <TopDestination />
      <Footer />
    </>
  );
}
