"use client";

import Image from "next/image";
import styles from "./hero.module.scss";
import Navbar from "../navbar/Navbar";
import SearchBox from "../searchBox/SearchBox";
import Vitenam from "../SVG/Vitenam";
import Paris from "../SVG/Paris";
import Agra from "../SVG/Agra";
import Kashmir from "../SVG/Kashmir";
import { useEffect, useRef, useState } from "react";

const data = [
  {
    id: 1,
    title: "Plan your trip to Vietnam",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/vitenam-bg.png",
    map: "/hero/vitenam.png",
    timeline: <Vitenam />,
  },
  {
    id: 2,
    title: "Plan your trip to Paris",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/paris-bg.png",
    map: "/hero/paris.png",
    timeline: <Paris />,
  },
  {
    id: 3,
    title: "Plan your trip to Agra",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/agra-bg.png",
    map: "/hero/agra.png",
    timeline: <Agra />,
  },
  {
    id: 4,
    title: "Plan your trip to Kashmir",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/kashmir-bg.png",
    map: "/hero/kashmir.png",
    timeline: <Kashmir />,
  },
];

const Hero = () => {
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentDataIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true); // Trigger fade effect
      setTimeout(() => {
        setFade(false); // Reset fade after animation completes
      }, 1000);
    }, 8000);

    return () => clearTimeout(timer);
  }, [currentDataIndex]);

  const updateIndex = () => {
    setCurrentDataIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
    setFade(true); // Trigger fade effect
    setTimeout(() => {
      setFade(false); // Reset fade after animation completes
    }, 1000);
  };
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <Navbar />
        <div className={`${styles["bg-container"]} ${fade ? styles.fade : ""}`}>
          <Image
            src={data[currentDataIndex].bg}
            fill
            className={styles.bg}
            alt="hero"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.top}>
              <div className={styles.left}>
                <div className={styles.titles} onClick={updateIndex}>
                  <h1>{data[currentDataIndex].title}</h1>
                  <p>{data[currentDataIndex].subtitle}</p>
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
              <div className={styles.map}>
                {data[currentDataIndex].timeline}
              </div>
            </div>
            <SearchBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
