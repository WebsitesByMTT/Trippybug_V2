import Banner from "@/components/banner/Banner";
import styles from "./cars.module.scss";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import SearchBox from "@/components/searchBox/SearchBox";
import { notFound } from "next/navigation";
import { getPostsByCategoryName } from "../lib/data";
import Link from "next/link";

const Cars = async () => {
  let postData;
  try {
    const { edges } = await getPostsByCategoryName("cars-rental");
    postData = edges;

    if (postData.length <= 0) {
      notFound();
    }
  } catch (error) {
    notFound();
  }
  return (
    <>
      <Banner
        bg="/cars-bg.png"
        align="flex-start"
        title="Find hundreds of car on rental"
      />

      <div className={styles.cars}>
        <div className={styles.search}>
          <SearchBox />
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            <ul className={styles.cards}>
              {postData.map((item) => (
                <li className={styles.card} key={item?.node?.postId}>
                  <div className={styles[`image-container`]}>
                    <Image
                      src={item?.node?.featuredImage?.node?.sourceUrl}
                      alt={item?.node?.title}
                      fill
                      className={styles.image}
                    />
                  </div>

                  <div className={styles.detail}>
                    <div className={styles.title}>
                      <h4>{item?.node?.title}</h4>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item?.node?.excerpt,
                        }}
                        className={styles.desc}
                      />
                    </div>
                    <div className={styles.button}>
                      <Link href={`/${item?.node?.slug}`}>
                        <button>
                          <span>Read More</span>
                          <svg
                            viewBox="0 0 68 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M66.9264 10.9809C67.4489 10.4584 67.4489 9.61122 66.9264 9.08872L58.4117 0.574076C57.8892 0.0515757 57.0421 0.0515757 56.5196 0.574076C55.9971 1.09658 55.9971 1.94372 56.5196 2.46622L64.0882 10.0348L56.5196 17.6034C55.9971 18.1259 55.9971 18.973 56.5196 19.4955C57.0421 20.018 57.8892 20.018 58.4117 19.4955L66.9264 10.9809ZM0.420898 11.3727H65.9803V8.69684H0.420898V11.3727Z"
                              fill="#0F5A83"
                            />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cars;
