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
    title: "Plan your trip to Dubai",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/1.jpg",
    map: "/hero/vitenam.png",
    timeline: <Vitenam />,
  },
  {
    id: 2,
    title: "Plan your trip to Paris",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/3.jpg",
    map: "/hero/paris.png",
    timeline: <Paris />,
  },
  {
    id: 3,
    title: "Plan your trip to Agra",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/4.jpg",
    map: "/hero/agra.png",
    timeline: <Agra />,
  },
  {
    id: 4,
    title: "Plan your trip to Kashmir",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/5.jpg",
    map: "/hero/kashmir.png",
    timeline: <Kashmir />,
  },
  {
    id: 1,
    title: "Plan your trip to Dubai",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/6.jpeg",
    map: "/hero/vitenam.png",
    timeline: <Vitenam />,
  },
  {
    id: 2,
    title: "Plan your trip to Paris",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/7.jpeg",
    map: "/hero/paris.png",
    timeline: <Paris />,
  },
  {
    id: 3,
    title: "Plan your trip to Agra",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/8.jpg",
    map: "/hero/agra.png",
    timeline: <Agra />,
  },
  {
    id: 4,
    title: "Plan your trip to Kashmir",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/9.jpg",
    map: "/hero/kashmir.png",
    timeline: <Kashmir />,
  },
  {
    id: 1,
    title: "Plan your trip to Dubai",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/10.webp",
    map: "/hero/vitenam.png",
    timeline: <Vitenam />,
  },
  {
    id: 2,
    title: "Plan your trip to Paris",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/11.jpg",
    map: "/hero/paris.png",
    timeline: <Paris />,
  },
  {
    id: 3,
    title: "Plan your trip to Agra",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/12.jpg",
    map: "/hero/agra.png",
    timeline: <Agra />,
  },
  {
    id: 4,
    title: "Plan your trip to Kashmir",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/13.jpg",
    map: "/hero/kashmir.png",
    timeline: <Kashmir />,
  },
  {
    id: 1,
    title: "Plan your trip to Dubai",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/14.jpeg",
    map: "/hero/vitenam.png",
    timeline: <Vitenam />,
  },
  {
    id: 2,
    title: "Plan your trip to Paris",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/15.webp",
    map: "/hero/paris.png",
    timeline: <Paris />,
  },
  {
    id: 3,
    title: "Plan your trip to Agra",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/16.jpg",
    map: "/hero/agra.png",
    timeline: <Agra />,
  },
  {
    id: 4,
    title: "Plan your trip to Kashmir",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/17.png",
    map: "/hero/kashmir.png",
    timeline: <Kashmir />,
  },
  {
    id: 4,
    title: "Plan your trip to Kashmir",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/18.jpg",
    map: "/hero/kashmir.png",
    timeline: <Kashmir />,
  },
  {
    id: 4,
    title: "Plan your trip to Kashmir",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/19.webp",
    map: "/hero/kashmir.png",
    timeline: <Kashmir />,
  },
  {
    id: 4,
    title: "Plan your trip to Kashmir",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/20.webp",
    map: "/hero/kashmir.png",
    timeline: <Kashmir />,
  },
  {
    id: 4,
    title: "Plan your trip to Kashmir",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/21.avif",
    map: "/hero/kashmir.png",
    timeline: <Kashmir />,
  },
  {
    id: 4,
    title: "Plan your trip to Kashmir",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/22.jpg",
    map: "/hero/kashmir.png",
    timeline: <Kashmir />,
  },
  {
    id: 4,
    title: "Plan your trip to Kashmir",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/23.jpg",
    map: "/hero/kashmir.png",
    timeline: <Kashmir />,
  },
  {
    id: 4,
    title: "Plan your trip to Kashmir",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/24.webp",
    map: "/hero/kashmir.png",
    timeline: <Kashmir />,
  },
  {
    id: 4,
    title: "Plan your trip to Kashmir",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/25.webp",
    map: "/hero/kashmir.png",
    timeline: <Kashmir />,
  },
  {
    id: 4,
    title: "Plan your trip to Kashmir",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/26.jpeg",
    map: "/hero/kashmir.png",
    timeline: <Kashmir />,
  },
  {
    id: 4,
    title: "Plan your trip to Kashmir",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/27.jpg",
    map: "/hero/kashmir.png",
    timeline: <Kashmir />,
  },
  {
    id: 4,
    title: "Plan your trip to Kashmir",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/28.webp",
    map: "/hero/kashmir.png",
    timeline: <Kashmir />,
  },
  {
    id: 4,
    title: "Plan your trip to Kashmir",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/29.jpg",
    map: "/hero/kashmir.png",
    timeline: <Kashmir />,
  },
  {
    id: 4,
    title: "Plan your trip to Kashmir",
    subtitle:
      "Figma ipsum component variant main layer. Pen flatten scrolling object community pen reesizing. Variant stroke J&K",
    bg: "/hero/30.jpg",
    map: "/hero/kashmir.png",
    timeline: <Kashmir />,
  },
];

const Hero = () => {
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const heroRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const { top } = heroRef.current.getBoundingClientRect();
        setShowNavbar(top > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentDataIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true); // Trigger fade effect
      setTimeout(() => {
        setFade(false); // Reset fade after animation completes
      }, 500);
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
    }, 500);
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
                <div
                  className={`${styles["titles"]} ${fade ? styles.fade : ""}`}
                  onClick={updateIndex}
                >
                  <h1>
                    Plan Your Trip to{" "}
                    <span>
                      {data[currentDataIndex].title.split(" ").pop()}{" "}
                    </span>
                  </h1>
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
            <div className={styles.middle}>
              <div className={styles.map}>
                {data[currentDataIndex].timeline}
              </div>
            </div>

            <div className={styles.bottom}>
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
