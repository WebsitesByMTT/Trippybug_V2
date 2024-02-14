"use client"
import Image from "next/image";
import styles from "./trendingNow.module.scss";
import React, { useState, useRef, useEffect } from "react";
import Link from 'next/link';





const data = [
  {

    title: "TOP 10 Indian Forts Not to Miss",
    desc: "Unevil indian forts with majestic, royal places and captivating histories....",
    img: "/trendingNow/1.png",
  },
  {
    title: "TOP 10 Indian Forts Not to Miss",
    desc: "Unevil indian forts with majestic, royal places and captivating histories....",
    img: "/trendingNow/2.png",
  },
  {
    title: "TOP 10 Indian Forts Not to Miss",
    desc: "Unevil indian forts with majestic, royal places and captivating histories....",
    img: "/trendingNow/1.png",
  },
  {
    title: "TOP 10 Indian Forts Not to Miss",
    desc: "Unevil indian forts with majestic, royal places and captivating histories....",
    img: "/trendingNow/2.png",
  },
  {
    title: "TOP 10 Indian Forts Not to Miss",
    desc: "Unevil indian forts with majestic, royal places and captivating histories....",
    img: "/trendingNow/1.png",
  },
  {
    title: "TOP 10 Indian Forts Not to Miss",
    desc: "Unevil indian forts with majestic, royal places and captivating histories....",
    img: "/trendingNow/2.png",
  },
  {
    title: "TOP 10 Indian Forts Not to Miss",
    desc: "Unevil indian forts with majestic, royal places and captivating histories....",
    img: "/trendingNow/1.png",
  },
  {
    title: "TOP 10 Indian Forts Not to Miss",
    desc: "Unevil indian forts with majestic, royal places and captivating histories....",
    img: "/trendingNow/2.png",
  },
];

const TrendingNow = () => {
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftButtonClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    ref.current.scrollIntoView({ behavior: 'smooth' });
    console.log("clicke Left")

  };


  const handleRightButtonClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    ref.current.scrollIntoView({ behavior: 'smooth' });
    console.log("clicke right")

  };




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


            {data.map((item, index) => (
              <div className={styles.card} key={index} ref={index === currentIndex ? ref : null}>
                <div className={styles[`card-container`]}>
                  <div className={styles[`image-container`]}>
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className={styles.image}
                    />
                  </div>

                  <div className={styles.detail}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>

                  </div>

                </div>
              </div>
            ))}
          </div>
          <button className={styles.leftbtn}
            onClick={handleLeftButtonClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
              <path d="M-2.32535e-07 19.5C-3.60964e-07 8.73015 8.73015 3.60964e-07 19.5 2.32535e-07C30.2698 1.04106e-07 39 8.73015 39 19.5C39 30.2698 30.2698 39 19.5 39C8.73015 39 -1.04106e-07 30.2699 -2.32535e-07 19.5Z" fill="#0F5A83" />
              <path d="M23 13L17 19.5L23 26" fill="#0F5A83" />
              <path d="M23 13L17 19.5L23 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button className={styles.rightbtn}
            onClick={handleRightButtonClick}
          >

            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
              <path d="M39 19.5C39 8.73015 30.2699 3.60964e-07 19.5 2.32535e-07C8.73015 1.04106e-07 3.60964e-07 8.73015 2.32535e-07 19.5C1.04106e-07 30.2698 8.73015 39 19.5 39C30.2698 39 39 30.2699 39 19.5Z" fill="#0F5A83" />
              <path d="M17 13L23 19.5L17 26" fill="#0F5A83" />
              <path d="M17 13L23 19.5L17 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default TrendingNow;
