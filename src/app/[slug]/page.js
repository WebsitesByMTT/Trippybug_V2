// "use client";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import styles from "./singleBlog.module.scss";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import Categories from "@/components/categories/Categories";
import { getPostBySlug } from "../lib/data";
// import { usePathname } from "next/navigation";
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

const SingleBlog = async () => {
  // const pathname = usePathname();
  // console.log("path name ; ", pathname);

  const data = getPostBySlug(
    "arta-mallorca-guia-consejos-fotos-que-ver-y-hacer"
  );
  console.log("DATA : ", data);
  return (
    <>
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
                  <h1>Figma ipsum component variant main layer. Bullet.</h1>
                </div>
                <div className={styles.user}>
                  <div className={styles[`image-container`]}>
                    <Image
                      src={"/exploreNow/1.png"}
                      alt="user"
                      fill
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.detail}>
                    <h4>TrippyBug</h4>
                    <p>About 18 hours ago</p>
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
                    src={"/exploreNow/1.png"}
                    fill
                    alt="banner"
                    className={styles.image}
                  />
                </div>
                <div className={styles[`blog-content`]}>
                  <div className={styles.para}>
                    <p>
                      Frontier Airlines operates flights from Orlando
                      International Airport’s Terminal A. This terminal manages
                      all arrival and departure operations. MCO frontier
                      terminal A has two Airsides that can be utilized to run
                      these successfully. Every Airport contains many gates that
                      are used to handle flight operations. Most of its flying
                      activity occurs on Airside 1, which includes Gates 1–29.
                      Aside from these gates, TA provides many facilities on the
                      ground before and after the journey. These include
                      parking, lost and found, restaurants, and hotel facilities
                    </p>
                  </div>

                  <div className={styles.para}>
                    <h3>
                      What Are The Frontier Terminals For MCO Airport Departures
                      And Arrivals?
                    </h3>

                    <p>
                      Terminal A of Orlando International Airport efficiently
                      manages international and domestic flight arrivals. When
                      arriving at this site, passengers can use Levels 1 (Gate
                      8A) and 2 to access the luggage claim areas. They can go
                      to TA Level 1 to acquire ground transportation services. 
                      Frontier Airlines approaches Terminal A at Orlando
                      International Airport for international flight departures.
                      Domestic flights originate at the same terminal. Before
                      aircraft departure, security checks are done at Gates
                      1–59, Level 3. In addition, flight check-in counters are
                      located on the same level on MCO Frontier terminal.   
                    </p>
                  </div>

                  <div className={styles.para}>
                    <h3>
                      What Are The Different Levels Of Frontier Airlines’
                      Orlando Terminal A?
                    </h3>

                    <p>
                      Frontier Orlando Airport Terminal A houses four levels:
                      R-1, 1, 2, and 3. There are parking spaces on Level R-1.
                      Level one provides access to ground transportation
                      facilities. Baggage claim services are available at both
                      Levels 1 and 2. Additionally, Level 3 offers security
                      checks, check-in areas, and gates.   
                    </p>
                  </div>

                  <div className={styles.para}>
                    <h3>
                      What Restaurants Do Frontier Airlines MCO Terminal A
                      offer?
                    </h3>

                    <p>
                      Many restaurants are available at MCO Airport Terminal A
                      for every Frontier Airlines passenger. Different
                      restaurants have different opening and closing times. For
                      example, Sbarro, famous for its delicious pizzas, opens at
                      05:00 a.m. and closes around 09:00 p.m. Meanwhile, Panda
                      Express, famous for its exquisite Chinese Cuisine, opens
                      at 09:00 a.m. and closes at 09:00 p.m. 
                    </p>
                  </div>

                  <div className={styles.para}>
                    <h3>
                      What Services Are Offered At Frontier Terminal Orlando
                      Airport?
                    </h3>

                    <p>
                      MCO Frontier Terminal Airlines passengers at Orlando
                      International Airport Terminal A can enjoy various
                      services. This includes the Hyatt Regency Orlando
                      International Airport hotel, which contains 20 rooms where
                      passengers can relax and freshen up. Some of the amenities
                      offered by Frontier Terminal Airport A are as follows: 
                    </p>

                    <ul>
                      <li>
                        There are information booths close to each security
                        checkpoint. 
                      </li>
                      <li>
                        The booths are only open from 6:00 a.m. to 8:00 p.m. 
                      </li>

                      <li>
                        Text phones and TTYs are available for passengers’
                        convenience. 
                      </li>

                      <li>
                        Luggage carts are provided to transport bulky objects
                        for a fee of at least $6.
                      </li>

                      <li>
                        Luggage carts are not typically permitted at MCO
                        Frontier terminal TA security areas. 
                      </li>

                      <li>Most travellers can visit Level 1 of TA to shop.</li>
                    </ul>

                    <p>
                      At MCO Airport, no specific service provides transport to
                      TA from other regions. Shuttle vans, however, can be hired
                      to transport passengers to and from the Airport. They are
                      found near the Ground Transportation Curb on Level 1.
                      Passengers can access this facility using Gates A19 to
                      A21. These shuttle vehicles need a per-passenger fee. 
                    </p>

                    <p>
                      Multiple flights depart from Orlando International
                      Airport’s Frontier Terminal A regularly. Numerous
                      facilities are provided on the ground to handle these
                      various flights efficiently. Some of these include
                      parking, lost and found, and eateries. A map is also
                      provided to help you get to these destinations quickly.
                    </p>
                  </div>
                </div>
              </main>
            </div>
            <aside className={styles.sidebar}>
              <ul>
                {categories.map((item) => (
                  <li key={item.id}>
                    <div className={styles[`image-container`]}>
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className={styles.image}
                      />
                    </div>
                    <h6>{item.title}</h6>
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
              <div className={styles.card}>
                <div className={styles[`image-container`]}>
                  <Image
                    src={"/exploreNow/1.png"}
                    fill
                    alt="recent-blog"
                    className={styles.image}
                  />
                </div>
                <div className={styles.desc}>
                  <h5>Figma</h5>
                  <p>
                    Figma ipsum component variant main layer. Thumbnail project
                    mask.
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles[`image-container`]}>
                  <Image
                    src={"/exploreNow/1.png"}
                    fill
                    alt="recent-blog"
                    className={styles.image}
                  />
                </div>
                <div className={styles.desc}>
                  <h5>Figma</h5>
                  <p>
                    Figma ipsum component variant main layer. Thumbnail project
                    mask.
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles[`image-container`]}>
                  <Image
                    src={"/exploreNow/1.png"}
                    fill
                    alt="recent-blog"
                    className={styles.image}
                  />
                </div>
                <div className={styles.desc}>
                  <h5>Figma</h5>
                  <p>
                    Figma ipsum component variant main layer. Thumbnail project
                    mask.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SingleBlog;
