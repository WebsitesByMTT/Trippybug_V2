import { getAllPosts, getCategories } from "@/app/lib/data";
import Categories from "@/components/categories/Categories";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import styles from "../blogs.module.scss";
import Image from "next/image";
import CategoriesGrid from "@/components/categoriesGrid/CategoriesGrid";
import Footer from "@/components/footer/Footer";
import Link from "next/link";

const page = async ({ params, preview = false, previewData }) => {
  const { edges: categories } = await getCategories(preview);
  const { edges: posts } = await getAllPosts();

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
              href={`/${item.node?.name}`}
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
          <CategoriesGrid posts={posts} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
