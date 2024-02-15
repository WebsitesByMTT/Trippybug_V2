import styles from "./titles.module.scss";

const Titles = ({ title, subtitle, desc }) => {
  return (
    <div className={styles.titles}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Titles;
