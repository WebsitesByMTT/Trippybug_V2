import { Caveat } from "next/font/google";
import styles from "./titles.module.scss";

const caveat = Caveat({ subsets: ["latin"] });

const Titles = ({ title, subtitle, desc }) => {
  return (
    <div className={styles.titles}>
      <h2 className={caveat.className}>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Titles;
