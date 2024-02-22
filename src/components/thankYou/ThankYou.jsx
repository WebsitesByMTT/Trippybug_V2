import styles from "./thankYou.module.scss";

const ThankYou = () => {
  return (
    <div className={styles[`thank-you`]}>
      <div className={styles.container}>
        <h2>Thank you!</h2>
        <p>
          Figma ipsum component variant main layer. Figjam style flatten clip
          object auto align outline. Device editor prototype pencil align mask.
          Effect comment.
        </p>
        <button>Close</button>
      </div>
    </div>
  );
};

export default ThankYou;
