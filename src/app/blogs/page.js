import Navbar from "@/components/navbar/Navbar";
import styles from "./blogs.module.scss";
import Categories from "@/components/categories/Categories";
import Image from "next/image";

const categories = [
  {
    id: 1,
    title: "All",
    img: "/exploreNow/1.png",
  },
  {
    id: 2,
    title: "Airlines",
    img: "/exploreNow/2.png",
  },
  {
    id: 3,
    title: "Cars",
    img: "/exploreNow/4.png",
  },
  {
    id: 4,
    title: "Explore",
    img: "/exploreNow/2.png",
  },
  {
    id: 5,
    title: "Inspiration",
    img: "/exploreNow/1.png",
  },
  {
    id: 6,
    title: "Recommended Hotels",
    img: "/exploreNow/2.png",
  },
  {
    id: 7,
    title: "Trending",
    img: "/exploreNow/4.png",
  },
  {
    id: 8,
    title: "Uncategorized",
    img: "/exploreNow/2.png",
  },
];

const images = [
  "/exploreNow/1.png",
  "/exploreNow/2.png",
  "/exploreNow/3.png",
  "/exploreNow/4.png",
  "/exploreNow/5.png",
  "/exploreNow/1.png",
  "/exploreNow/1.png",
  "/exploreNow/2.png",
  "/exploreNow/3.png",
  "/exploreNow/4.png",
  "/exploreNow/5.png",
  "/exploreNow/1.png",
  "/exploreNow/1.png",
  "/exploreNow/2.png",
  "/exploreNow/3.png",
  "/exploreNow/4.png",
  "/exploreNow/5.png",
  "/exploreNow/1.png",
];

const Blogs = () => {
  return (
    <>
      <Navbar />
      <section className={styles.blogs}>
        <div className={styles.container}>
          <section className={styles.categories}>
            <Categories data={categories} />
          </section>
          <section className={styles[`image-gallery`]}>
            {images.map((image, index) => (
              <div className={styles[`image-container`]}>
                <Image
                  key={index}
                  fill
                  src={image}
                  alt={`Image ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </section>
        </div>
      </section>
    </>
  );
};

export default Blogs;
