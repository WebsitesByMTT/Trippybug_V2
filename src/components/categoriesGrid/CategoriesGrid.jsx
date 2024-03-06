"use client";

import Image from "next/image";
import styles from "./categoriesGrid.module.scss";
import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const CategoriesGrid = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const postsPerPage = 12;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleNextPage = () => {
    // paginate(currentPage + 1);
  };

  return (
    <>
      <div className={styles.grid}>
        {currentPosts.map((post, index) => (
          <div className={styles.card} key={index}>
            <div className={styles[`image-container`]}>
              <Image
                src={post?.node?.featuredImage?.node?.sourceUrl}
                fill
                alt={post?.node?.title}
                className={styles.image}
              />
            </div>
            <div className={styles.detail}>
              <div className={styles.container}>
                <div className={styles.title}>
                  <h4>{post?.node?.title}</h4>
                </div>
                <div className={styles.readmore}>
                  <Link href={post?.node?.slug} className={styles.button}>
                    <span>Read more </span>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.35062 11.459H13.2578V17.3662"
                        stroke="white"
                        strokeWidth="1.96906"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.41249 21.3047L13.2578 11.4594"
                        stroke="white"
                        strokeWidth="1.96906"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.41319 11.4594V4.56764C3.41319 4.30653 3.51692 4.05611 3.70155 3.87147C3.88619 3.68684 4.13661 3.58311 4.39772 3.58311H20.1502C20.4113 3.58311 20.6618 3.68684 20.8464 3.87147C21.031 4.05611 21.1348 4.30653 21.1348 4.56764V20.3202C21.1348 20.5813 21.031 20.8317 20.8464 21.0163C20.6618 21.201 20.4113 21.3047 20.1502 21.3047H13.2585"
                        stroke="white"
                        strokeWidth="1.96906"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.actions}>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
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

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastPost >= posts.length}
        >
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
    </>
  );
};

export default CategoriesGrid;
