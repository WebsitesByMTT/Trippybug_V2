import Image from "next/image";
import styles from "./page.module.scss";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <Footer />
      </div>
    </main>
  );
}
