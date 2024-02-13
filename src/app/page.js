import Image from "next/image";
import styles from "./page.module.scss";
import Footer from "@/components/footer/Footer";
import TopDestination from "@/components/topDestination/TopDestination";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <TopDestination />
      <Footer />
      </div>
    </main>
  );
}
