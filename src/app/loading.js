import Image from "next/image";
import styles from "./styles/loader.module.scss";

const Loading = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.container}>
        <div className={styles[`image-container`]}>
          <Image src={"/logo.png"} alt="logo" className={styles.image} fill />
        </div>
      </div>
    </div>
  );
};

export default Loading;
