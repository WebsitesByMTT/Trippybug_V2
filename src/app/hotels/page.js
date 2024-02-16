import Banner from "@/components/banner/Banner";
import styles from "./hotels.module.scss";
import Titles from "@/components/titles/Titles";
import Image from "next/image";
import Footer from "@/components/footer/Footer";

const data = [
  {
    id: 1,
    title: "Most Beautiful Capital Cities In Europe For Your Winter Vaccation ",
    desc: "Explore the most beautiful Europe for",
    img: "/images/hotels.png",
  },
  {
    id: 2,
    title: "Most Beautiful Capital Cities In Europe For Your Winter Vaccation ",
    desc: "Explore the most beautiful Europe for",
    img: "/images/hotels.png",
  },
  {
    id: 3,
    title: "Most Beautiful Capital Cities In Europe For Your Winter Vaccation ",
    desc: "Explore the most beautiful Europe for",
    img: "/images/hotels.png",
  },
  {
    id: 1,
    title: "Most Beautiful Capital Cities In Europe For Your Winter Vaccation ",
    desc: "Explore the most beautiful Europe for",
    img: "/images/hotels.png",
  },
  {
    id: 2,
    title: "Most Beautiful Capital Cities In Europe For Your Winter Vaccation ",
    desc: "Explore the most beautiful Europe for",
    img: "/images/hotels.png",
  },
  {
    id: 3,
    title: "Most Beautiful Capital Cities In Europe For Your Winter Vaccation ",
    desc: "Explore the most beautiful Europe for",
    img: "/images/hotels.png",
  },
];

const Hotels = () => {
  return (
    <>
      <Banner
        bg="/hotels-bg.png"
        align="flex-start"
        title="Find top Hotels at popular destinations"
      />

      <div className={styles.hotels}>
        <div className={styles.container}>
          <Titles
            title="TRENDING BLOG"
            subtitle="Find Your Dream Destination"
            desc="Explore our best-recommended selection of places and find your dream gateway"
          />

          <div className={styles.content}>
            <div className={styles.grid}>
              {data.map((item) => (
                <div className={styles.card} key={item.id}>
                  <div className={styles[`card-container`]}>
                    <div className={styles[`image-container`]}>
                      <Image
                        src={item.img}
                        fill
                        className={styles.image}
                        alt={item.img}
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

        <Footer />
      </div>
    </>
  );
};

export default Hotels;
