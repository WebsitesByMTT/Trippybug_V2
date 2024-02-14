import Image from "next/image";
import styles from "./trendingNow.module.scss";
import { getPostsByCategoryName } from "@/app/lib/data";
import Link from "next/link";

const TrendingNow = async () => {
  const trendingBlogs = await getPostsByCategoryName("trending");
  const data = trendingBlogs.edges;
  return (
    <div className={styles[`trending-now`]}>
      <div className={styles.container}>
        <div className={styles.titles}>
          <h2>TRENDING NOW</h2>
          <h3>Find Your Dream Destination</h3>
          <p>
            Finding The Perfect Travel Flight Is Like Uncovering A Hidden
            Treasure
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.cards}>
            {data.map((post, index) => (
              <div className={styles.card} key={index}>
                <div className={styles[`card-container`]}>
                  <div className={styles[`image-container`]}>
                    <Image
                      src={post?.node?.featuredImage?.node?.sourceUrl}
                      alt={post?.node?.title}
                      fill
                      className={styles.image}
                    />
                  </div>

                  <div className={styles.detail}>
                    <h4>{post?.node?.title}</h4>
                    <div
                      dangerouslySetInnerHTML={{ __html: post?.node?.excerpt }}
                      className={styles.desc}
                    />
                    <Link href={post?.node?.slug} className={styles.more}>
                      More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
