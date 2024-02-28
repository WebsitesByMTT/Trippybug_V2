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
import { Suspense } from "react";
import Loading from "./loading";

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const Blogs = async ({ searchParams, preview = false }) => {
  let postsData;

  if (isEmpty(searchParams) || searchParams.category === "all") {
    const { edges: posts } = await getAllPosts();
    const { edges: nextPosts } = await getAllPosts(
      false,
      posts?.pageInfo?.endCursor
    );
    postsData = [...posts, ...nextPosts];
  } else {
    let searchFor = searchParams.category.toLowerCase();

    if (searchFor === "airlines") {
      searchFor = "best airlines";
    } else if (searchFor === "cars") {
      searchFor = "cars rental";
    }
    // Remove existing hyphens
    searchFor = searchFor.replace(/-/g, "");
    // Replace spaces with hyphens
    searchFor = searchFor.replace(/\s+/g, "-");

    const { edges: posts } = await getPostsByCategoryName(searchFor, 12);
    postsData = posts;
  }

  const { edges: categories } = await getCategories(preview);

  return (
    <>
      <Navbar />
      <div className={styles.categories}>
        <div className={styles.smaller}>
          <Categories data={categories} />
        </div>
        <div className={styles.larger}>
          <Link href={`/blogs?category=all`} className={styles.link}>
            <div className={styles[`image-container`]}>
              <Image
                src={"/all.png"}
                fill
                alt={"all"}
                className={styles.image}
              />
            </div>
            <h6>All</h6>
          </Link>
          {categories.map(
            (item, index) =>
              item.node?.name != "Gallery" && (
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
              )
          )}
        </div>
      </div>
      <div className={styles.blogs}>
        <div className={styles.container}>
          <Suspense fallback={<Loading />}>
            <CategoriesGrid posts={postsData} />
          </Suspense>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
