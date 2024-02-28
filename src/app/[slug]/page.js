import Navbar from "@/components/navbar/Navbar";
import React from "react";
import styles from "./singleBlog.module.scss";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import Categories from "@/components/categories/Categories";
import { getCategories, getPostBySlug, getRecentPosts } from "../lib/data";
import Link from "next/link";
import Script from "next/script";

export const generateMetadata = async ({
  params,
  preview = false,
  previewData,
}) => {
  const { post: postData } = await getPostBySlug(
    params.slug,
    preview,
    previewData
  );

  return {
    title: postData?.title,
    description: postData?.seo?.metaDesc,
    keywords: postData?.seo?.metaKeywords,
    openGraph: {
      title: postData?.title,
      description: postData?.seo?.opengraphDescription,
      url: `/${params.slug}`,
      type: "article",
      images: postData?.seo?.opengraphImage?.sourceUrl,
    },
    alternates: {
      canonical: postData?.seo?.canonical,
    },
  };
};

function calculateTimeAgo(timestamp) {
  const currentDate = new Date();
  const timestampDate = new Date(timestamp);
  const timeDifference = currentDate - timestampDate;
  const millisecondsInMinute = 1000 * 60;
  const millisecondsInHour = millisecondsInMinute * 60;
  const millisecondsInDay = millisecondsInHour * 24;

  if (timeDifference < millisecondsInMinute) {
    return "Just now";
  } else if (timeDifference < millisecondsInHour) {
    const minutes = Math.floor(timeDifference / millisecondsInMinute);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (timeDifference < millisecondsInDay) {
    const hours = Math.floor(timeDifference / millisecondsInHour);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else {
    const days = Math.floor(timeDifference / millisecondsInDay);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }
}

const SingleBlog = async ({ params, preview = false, previewData }) => {
  const { post: postData } = await getPostBySlug(
    params.slug,
    preview,
    previewData
  );

  const { edges: categories } = await getCategories(preview);
  const { edges: recentPosts } = await getRecentPosts(3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.trippybug.com/${params.slug}`,
    },
    headline: postData?.title,
    description: postData?.seo?.metaDesc,
    image: postData?.seo?.opengraphImage?.sourceUrl,
    author: {
      "@type": "Organization",
      name: "TrippyBug",
    },
    publisher: {
      "@type": "Organization",
      name: postData?.author?.node?.name,
      logo: {
        "@type": "ImageObject",
        url: "https://www.trippybug.com/_next/image?url=%2Fassets%2Fimages%2FnewLogo.png&w=3840&q=75",
      },
    },
    datePublished: postData?.date,
  };

  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <div className={styles.categories}>
        <Categories data={categories} />
      </div>
      <section className={styles[`single-blog`]}>
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.content}>
              <header>
                <div className={styles.title}>
                  <h1>{postData?.title}</h1>
                </div>
                <div className={styles.user}>
                  <div className={styles[`image-container`]}>
                    <Image
                      src={postData?.author?.node?.avatar?.url}
                      alt={postData?.author?.node?.name}
                      fill
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.detail}>
                    <h4>{postData?.author?.node?.name}</h4>
                    <p>{calculateTimeAgo(postData?.date)}</p>
                  </div>
                </div>

                <div className={styles.actions}>
                  <button>
                    <svg
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.56609 10.6252C4.87502 9.87937 5.32784 9.20169 5.89868 8.63086C6.46951 8.06002 7.14719 7.6072 7.89302 7.29827C8.63886 6.98933 9.43824 6.83032 10.2455 6.83032C11.0528 6.83032 11.8522 6.98933 12.598 7.29827C13.3438 7.6072 14.0215 8.06002 14.5924 8.63086L16.3928 10.4313L18.1933 8.63086C19.3462 7.478 20.9098 6.83034 22.5402 6.83034C24.1705 6.83034 25.7341 7.478 26.887 8.63086C28.0399 9.78371 28.6875 11.3473 28.6875 12.9777C28.6875 14.6081 28.0399 16.1717 26.887 17.3245L16.3928 27.8187L5.89868 17.3245C5.32784 16.7537 4.87502 16.076 4.56609 15.3302C4.25715 14.5844 4.09814 13.785 4.09814 12.9777C4.09814 12.1704 4.25715 11.371 4.56609 10.6252Z"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <button>
                    <svg
                      viewBox="0 0 26 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.88386 17.8571L8.98207 23.3214L13.0803 17.8571H22.6428C23.3674 17.8571 24.0623 17.5692 24.5747 17.0569C25.0871 16.5445 25.3749 15.8496 25.3749 15.1249V4.19638C25.3749 3.47177 25.0871 2.77684 24.5747 2.26446C24.0623 1.75208 23.3674 1.46423 22.6428 1.46423H3.51779C2.79318 1.46423 2.09825 1.75208 1.58587 2.26446C1.07349 2.77684 0.785645 3.47177 0.785645 4.19638V15.1249C0.785645 15.8496 1.07349 16.5445 1.58587 17.0569C2.09825 17.5692 2.79318 17.8571 3.51779 17.8571H4.88386Z"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <button>
                    <svg
                      viewBox="0 0 34 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.6697 8.19636L16.7679 4.09814L20.8661 8.19636"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M27.6963 23.2231V27.3214C27.6963 27.6837 27.5523 28.0311 27.2961 28.2873C27.04 28.5435 26.6925 28.6874 26.3302 28.6874H7.20518C6.84288 28.6874 6.49541 28.5435 6.23922 28.2873C5.98304 28.0311 5.83911 27.6837 5.83911 27.3214V23.2231M16.7677 4.09814V23.2231V4.09814Z"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </header>
              <main>
                <div className={styles[`blog-banner`]}>
                  <Image
                    src={postData?.featuredImage?.node?.sourceUrl}
                    fill
                    alt={postData?.title}
                    className={styles.image}
                  />
                </div>
                <div className={styles[`blog-content`]}>
                  <div
                    dangerouslySetInnerHTML={{ __html: postData?.content }}
                    className={styles.para}
                  />
                </div>
              </main>
            </div>
            <aside className={styles.sidebar}>
              <ul>
                {categories.map((item, index) => (
                  <li key={item.id}>
                    <div className={styles[`image-container`]}>
                      <Image
                        src={
                          item.node?.posts?.edges[0]?.node?.featuredImage?.node
                            ?.sourceUrl
                        }
                        alt={item.node?.name}
                        fill
                        className={styles.image}
                      />
                    </div>
                    <h6>{item.node?.name}</h6>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
          <div className={styles.bottom}>
            <div className={styles.title}>
              <h2>Recent Blogs</h2>
              <svg
                height="2"
                viewBox="0 0 717 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1H716" stroke="#00507C" strokeLinecap="round" />
              </svg>
            </div>
            <div className={styles.grid}>
              {recentPosts.map((item, index) => (
                <div className={styles.card} key={index}>
                  <div className={styles[`image-container`]}>
                    <Image
                      src={item.node?.featuredImage?.node?.sourceUrl}
                      fill
                      alt="recent-blog"
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.desc}>
                    <h5>{item.node?.title}</h5>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.node?.excerpt }}
                      className={styles.excerpt}
                    />
                  </div>
                  <div className={styles.action}>
                    <Link
                      href={`/${item.node?.slug}`}
                      className={styles.button}
                    >
                      <span>Read More</span>{" "}
                      <svg
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.50003 11.0157H13.4072V16.9229"
                          stroke="white"
                          strokeWidth="1.96906"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.56191 20.8608L13.4072 11.0155"
                          stroke="white"
                          strokeWidth="1.96906"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.56187 11.0155V4.12379C3.56187 3.86268 3.6656 3.61226 3.85023 3.42762C4.03487 3.24299 4.28529 3.13926 4.5464 3.13926H20.2989C20.56 3.13926 20.8104 3.24299 20.9951 3.42762C21.1797 3.61226 21.2834 3.86268 21.2834 4.12379V19.8763C21.2834 20.1374 21.1797 20.3878 20.9951 20.5725C20.8104 20.7571 20.56 20.8608 20.2989 20.8608H13.4072"
                          stroke="white"
                          strokeWidth="1.96906"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SingleBlog;
