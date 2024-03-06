"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./exploreNowSlider.module.scss";

const ExploreNowSlider = ({ data, setPreviousPost }) => {
  const sliderRef = useRef(null);

  const carouselSettings = {
    slidesToShow: 2,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    beforeChange: (current, next) =>
      setPreviousPost({ post: data[current], count: current + 1 }),
  };

  const previousSlide = () => {
    sliderRef?.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef?.current?.slickNext();
  };

  return (
    <section className={styles.cards}>
      <Slider {...carouselSettings} ref={sliderRef}>
        {data.map((post, index) => (
          <Link href={post.node?.slug} className={styles.card} key={index}>
            <div className={styles[`card-container`]}>
              <div className={styles[`inner-container`]}>
                <div className={styles[`image-container`]}>
                  <Image
                    src={post?.node?.featuredImage?.node?.sourceUrl}
                    fill
                    className={styles.image}
                    alt={post?.node?.title}
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </section>
  );
};

export default ExploreNowSlider;
