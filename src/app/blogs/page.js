import Navbar from "@/components/navbar/Navbar";
import styles from "./blogs.module.scss";
import Categories from "@/components/categories/Categories";
import Image from "next/image";
import CategoriesGrid from "@/components/categoriesGrid/CategoriesGrid";
import Footer from "@/components/footer/Footer";
import { getCategories } from "../lib/data";

const Blogs = async (params, preview = false, previewData) => {
  const { edges: categories } = await getCategories(preview);
  return (
    <>
      <Navbar />
      <div className={styles.categories}>
        <div className={styles.smaller}>
          <Categories data={categories} />
        </div>
        <ul className={styles.larger}>
          {categories.map((item, index) => (
            <li key={item.node?.id}>
              <div className={styles[`image-container`]}>
                <Image
                  src={
                    item.node?.posts?.edges[0]?.node?.featuredImage?.node
                      ?.sourceUrl
                  }
                  fill
                  alt={item.node?.name}
                  className={styles.image}
                />
              </div>
              <h6>{item.node?.name}</h6>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.blogs}>
        <div className={styles.container}>
          <CategoriesGrid />
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
