import Image from "next/image";
import styles from "./trendingNow.module.scss";

const data = [
  {
    title: "TOP 10 Indian Forts Not to Miss",
    desc: "Unevil indian forts with majestic, royal places and captivating histories....",
    img: "/trendingNow/1.png",
  },
  {
    title: "TOP 10 Indian Forts Not to Miss",
    desc: "Unevil indian forts with majestic, royal places and captivating histories....",
    img: "/trendingNow/2.png",
  },
  {
    title: "TOP 10 Indian Forts Not to Miss",
    desc: "Unevil indian forts with majestic, royal places and captivating histories....",
    img: "/trendingNow/1.png",
  },
  {
    title: "TOP 10 Indian Forts Not to Miss",
    desc: "Unevil indian forts with majestic, royal places and captivating histories....",
    img: "/trendingNow/2.png",
  },
  {
    title: "TOP 10 Indian Forts Not to Miss",
    desc: "Unevil indian forts with majestic, royal places and captivating histories....",
    img: "/trendingNow/1.png",
  },
  {
    title: "TOP 10 Indian Forts Not to Miss",
    desc: "Unevil indian forts with majestic, royal places and captivating histories....",
    img: "/trendingNow/2.png",
  },
  {
    title: "TOP 10 Indian Forts Not to Miss",
    desc: "Unevil indian forts with majestic, royal places and captivating histories....",
    img: "/trendingNow/1.png",
  },
  {
    title: "TOP 10 Indian Forts Not to Miss",
    desc: "Unevil indian forts with majestic, royal places and captivating histories....",
    img: "/trendingNow/2.png",
  },
];

const TrendingNow = () => {
  return (
    <div className={styles[`trending-now`]}>
      <div className={styles.container}>
        <div className={styles.titles}>
          <h2>TRENDING NOW</h2>
          <h3>Find Your Dream Destination</h3>
          <p>
            Finding The Perfect Travel Flight Is Like Uncovering A Hidden
            Treasure
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.cards}>
            {data.map((item, index) => (
              <div className={styles.card} key={index}>
                <div className={styles[`card-container`]}>
                  <div className={styles[`image-container`]}>
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className={styles.image}
                    />
                  </div>

                  <div className={styles.detail}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
