import Image from "next/image";
import styles from "./banner.module.scss";
import Navbar from "../navbar/Navbar";
import SearchBox from "../searchBox/SearchBox";

const Banner = ({ bg, align, title, desc }) => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles[`bg-container`]}>
          <Image src={bg} fill className={styles.bg} alt={bg} />
        </div>
        <Navbar />
        <div className={styles.content}>
          <div className={styles.container} style={{ justifyContent: align }}>
            <div className={styles.titles}>
              <h1>{title}</h1>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
      <SearchBox />
    </>
  );
};

export default Banner;
