"use client";

import React, { useEffect, useRef } from "react";
import styles from "./trendingNowSlider.module.scss";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendingNowSlider = ({ data }) => {
  const sliderRef = useRef(null);

  const carouselSettings = {
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    dots: false,
    arrows: false,
    centermode: true,
    infinite: true,
    lazyLoad: "ondemand",
    touchThreshold: 100,
    swipeToSlide: true,
    focusOnSelect: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const previousSlide = () => {
    sliderRef?.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef?.current?.slickNext();
  };
  return (
    <div className={styles.cards}>
      <Slider {...carouselSettings} ref={sliderRef}>
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
      </Slider>
      <button className={styles.prevbtn} onClick={previousSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="none"
        >
          <path
            d="M7 1L1 7.5L7 14"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button className={styles.nextbtn} onClick={nextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="none"
        >
          <path
            d="M1 1L7 7.5L1 14"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default TrendingNowSlider;
