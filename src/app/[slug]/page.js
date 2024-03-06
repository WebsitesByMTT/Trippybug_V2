import Navbar from "@/components/navbar/Navbar";
import React from "react";
import styles from "./singleBlog.module.scss";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import Categories from "@/components/categories/Categories";
import { getCategories, getPostBySlug, getRecentPosts } from "../lib/data";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { searchImages } from "@/app/lib/searchImages";

export const generateMetadata = async ({
  params,
  preview = false,
  previewData,
}) => {
  let postData;
  try {
    const { post } = await getPostBySlug(params.slug, preview, previewData);
    postData = post;

    if (postData === null) {
      notFound();
    }
  } catch (error) {
    notFound();
  }

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

const SingleBlog = async ({
  params,
  preview = false,
  previewData,
  searchParams,
}) => {
  let postData;
  try {
    const { post } = await getPostBySlug(params.slug, preview, previewData);
    postData = post;

    if (postData === null) {
      notFound();
    }
  } catch (error) {
    notFound();
  }

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
        <Categories data={categories} searchParams={searchParams} />
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
                    item?.node?.name != "Gallery" && (
                      <Link
                        href={`/blogs?category=${item.node?.name}`}
                        key={item.id}
                        className={styles.link}
                      >
                        <div className={styles[`image-container`]}>
                          <Image
                            src={searchImages(item?.node?.name)}
                            alt={item.node?.name}
                            fill
                            className={styles.image}
                          />
                        </div>
                        <h6>{item.node?.name}</h6>
                      </Link>
                    )
                )}
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
