"use server";
import Navbar from "@/components/navbar/Navbar";
import styles from "./blogs.module.scss";
import Categories from "@/components/categories/Categories";
import Image from "next/image";
import CategoriesGrid from "@/components/categoriesGrid/CategoriesGrid";
import Footer from "@/components/footer/Footer";
import {
  getAllPosts,
  getCategories,
  getPostsByCategoryName,
} from "../lib/data";
import Link from "next/link";

const Blogs = async ({
  params,
  searchParams,
  preview = false,
  previewData,
}) => {
  const { edges: categories } = await getCategories(preview);
  const { edges: posts } = await getAllPosts();
  const { edges: nextPosts } = await getAllPosts(
    false,
    posts?.pageInfo?.endCursor
  );

  const searchFor = searchParams?.category?.toLowerCase().replace(/\s+/g, "-");

  console.log("SEARCH FOR : ", searchFor);
  const handleNextPage = () => {};

  return (
    <>
      <Navbar />
      <div className={styles.categories}>
        <div className={styles.smaller}>
          <Categories data={categories} />
        </div>
        <div className={styles.larger}>
          {categories.map((item, index) => (
            <Link
              href={`/blogs?category=${item.node?.name}`}
              key={item.node?.id}
              className={styles.link}
            >
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
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.blogs}>
        <div className={styles.container}>
          <CategoriesGrid posts={[...posts, ...nextPosts]} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
