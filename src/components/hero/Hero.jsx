"use client";

import Image from "next/image";
import styles from "./hero.module.scss";
import Navbar from "../navbar/Navbar";
import SearchBox from "../searchBox/SearchBox";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Paris",
    subtitle: "Roam hand in hand in the bustling city of Paris",
    bg: "/hero/paris.png",
    map: "/hero/paris-map.png",
    timeline: "/hero/paris-timeline.png",
  },
  {
    id: 2,
    title: "Switzerland",
    subtitle:
      "Pack your bags and get ready to experience the beautiful valley of Switzerland",
    bg: "/hero/switzerland.png",
    map: "/hero/switzerland-map.png",
    timeline: "/hero/switzerland-timeline.png",
  },
  {
    id: 3,
    title: "Japan",
    subtitle: "Roam hand in hand in the bustling city of Paris",
    bg: "/hero/japan.png",
    map: "/hero/japan-map.png",
    timeline: "/hero/japan-timeline.png",
  },
  {
    id: 4,
    title: "Vietnam",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke.",
    bg: "/hero/vietnam.png",
    map: "/hero/vitenam-map.png",
    timeline: "/hero/vitenam-timeline.png",
  },
];

const Hero = () => {
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentDataIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );

      setBackgroundOpacity(0.8); // Lower opacity when changing the background
      setTimeout(() => {
        setBackgroundOpacity(1); // Gradually increase opacity back to 1
      }, 800);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentDataIndex]);

  const updateIndex = () => {
    setCurrentDataIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
    setBackgroundOpacity(0.8); // Lower opacity when changing the background
    setTimeout(() => {
      setBackgroundOpacity(1); // Gradually increase opacity back to 1
    }, 800);
  };

  return (
    <div className={`${styles.hero}`}>
      <Navbar />
      <div
        className={styles.bg}
        style={{
          backgroundImage: `url(${data[currentDataIndex].bg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          opacity: backgroundOpacity,
        }}
      ></div>
      <div className={styles.content}>
        <div className={styles[`content-container`]}>
          <div className={styles.top}>
            <div className={styles.left}>
              <div className={`${styles["titles"]}`} onClick={updateIndex}>
                <h1>
                  {" "}
                  Plan your trip to <br /> {data[currentDataIndex].title}
                </h1>
                <p>{data[currentDataIndex].subtitle}</p>
              </div>
              <div className={styles.timeline}>
                <Image
                  src={data[currentDataIndex].timeline}
                  alt="timeline"
                  width={537}
                  height={184}
                  className={styles.image}
                />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.map}>
                <Image
                  src={data[currentDataIndex].map}
                  alt={data[currentDataIndex].title}
                  width={410}
                  height={386}
                  className={styles.image}
                />
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <SearchBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
