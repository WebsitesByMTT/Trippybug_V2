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
    arrows: true,
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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
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
              <div className={styles[`inner-container`]}>
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
                    <svg
                      viewBox="0 0 39 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M39 19.5C39 8.73015 30.2699 3.60964e-07 19.5 2.32535e-07C8.73015 1.04106e-07 3.60964e-07 8.73015 2.32535e-07 19.5C1.04106e-07 30.2698 8.73015 39 19.5 39C30.2698 39 39 30.2699 39 19.5Z"
                        fill="#0F5A83"
                      />
                      <path d="M17 13L23 19.5L17 26" fill="#0F5A83" />
                      <path
                        d="M17 13L23 19.5L17 26"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingNowSlider;
