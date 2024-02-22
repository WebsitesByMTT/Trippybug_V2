import Image from "next/image";
import styles from "./categoriesGrid.module.scss";

const CategoriesGrid = () => {
  return (
    <div className={styles.grid}>
      <div className={styles[`row`]}>
        <div className={styles[`col`]}>
          <div className={styles[`image-container`]}>
            <Image
              src={"/exploreNow/1.png"}
              alt="img"
              fill
              className={styles.image}
            />
          </div>
        </div>
      </div>

      <div className={styles[`row`]}>
        <div className={styles[`col`]}>
          <div className={styles[`image-container`]}>
            <Image
              src={"/exploreNow/1.png"}
              alt="img"
              fill
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles[`col`]}>
          <div className={styles[`image-container`]}>
            <Image
              src={"/exploreNow/1.png"}
              alt="img"
              fill
              className={styles.image}
            />
          </div>
          <div className={styles[`image-container`]}>
            <Image
              src={"/exploreNow/1.png"}
              alt="img"
              fill
              className={styles.image}
            />
          </div>
        </div>
      </div>

      <div className={styles[`row`]}>
        <div className={styles[`col`]}>
          <div className={styles[`image-container`]}>
            <Image
              src={"/exploreNow/1.png"}
              alt="img"
              fill
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles[`col`]}>
          <div className={styles[`image-container`]}>
            <Image
              src={"/exploreNow/1.png"}
              alt="img"
              fill
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles[`col`]}>
          <div className={styles[`image-container`]}>
            <Image
              src={"/exploreNow/1.png"}
              alt="img"
              fill
              className={styles.image}
            />
          </div>
        </div>
      </div>

      <div className={styles[`row`]}>
        <div className={styles[`col`]}>
          <div className={styles[`image-container`]}>
            <Image
              src={"/exploreNow/1.png"}
              alt="img"
              fill
              className={styles.image}
            />
          </div>
          <div className={styles[`image-container`]}>
            <Image
              src={"/exploreNow/1.png"}
              alt="img"
              fill
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles[`col`]}>
          <div className={styles[`image-container`]}>
            <Image
              src={"/exploreNow/1.png"}
              alt="img"
              fill
              className={styles.image}
            />
          </div>
        </div>
      </div>

      <div className={styles[`row`]}>
        <div className={styles[`col`]}>
          <div className={styles[`image-container`]}>
            <Image
              src={"/exploreNow/1.png"}
              alt="img"
              fill
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles[`col`]}>
          <div className={styles[`image-container`]}>
            <Image
              src={"/exploreNow/1.png"}
              alt="img"
              fill
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles[`col`]}>
          <div className={styles[`image-container`]}>
            <Image
              src={"/exploreNow/1.png"}
              alt="img"
              fill
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesGrid;
