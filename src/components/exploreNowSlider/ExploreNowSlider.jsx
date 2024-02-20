"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './exploreNowSlider.module.scss'

const ExploreNowSlider = ({data}) => {
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.cards}>
      <Slider {...carouselSettings} ref={sliderRef}>
        {data.map((post, index) => (
          <div className={styles.card} key={index}>
            <div className={styles[`card-container`]}>
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
        ))}
      </Slider>
    </section>
  );
};

export default ExploreNowSlider;
