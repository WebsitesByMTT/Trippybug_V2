import Navbar from "@/components/navbar/Navbar";
import styles from "./blogs.module.scss";
import Categories from "@/components/categories/Categories";
import Image from "next/image";
import CategoriesGrid from "@/components/categoriesGrid/CategoriesGrid";
import Footer from "@/components/footer/Footer";

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
  "/exploreNow/3.png",
  "/exploreNow/4.png",
  "/exploreNow/5.png",
  "/exploreNow/1.png",
];

const transformArray = (arr) => {
  let newArr = [];

  newArr.push([arr[0]]);

  let index = 1;

  newArr.push([[arr[index++]], [arr[index++], arr[index++]]]);

  newArr.push([arr[index++], arr[index++], arr[index++]]);

  newArr.push([[arr[index++], arr[index++]], [arr[index++]]]);

  newArr.push([arr[index++], arr[index++], arr[index++]]);

  return newArr;
};

const Blogs = () => {
  const transformedArr = transformArray(images);
  return (
    <>
      <Navbar />
      <Categories data={categories} />
      <div className={styles.blogs}>
        <div className={styles.container}>
          <CategoriesGrid nestedArray={transformedArr} />
          <div className={styles.actions}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="11"
                viewBox="0 0 20 11"
                fill="none"
              >
                <path
                  d="M5 1.5L1 5.5M1 5.5L5 9.5M1 5.5H19"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>Previous</span>
            </button>

            <button>
              <span>Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="11"
                viewBox="0 0 21 11"
                fill="none"
              >
                <path
                  d="M15.8453 1.5L19.8453 5.5M19.8453 5.5L15.8453 9.5M19.8453 5.5H1.84534"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
