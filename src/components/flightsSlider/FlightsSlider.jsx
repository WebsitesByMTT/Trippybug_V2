"use client";

import styles from "./flightsSlider.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const FlightsSlider = ({ data }) => {
  const sliderRef = useRef(null);
  const carouselSettings = {
    slidesToShow: 1,
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
    responsive: [],
  };

  const previousSlide = () => {
    sliderRef?.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef?.current?.slickNext();
  };
  return (
    <div className={styles.slider}>
      <Slider {...carouselSettings} ref={sliderRef}>
        {data.map((post, index) => (
          <div className={styles.post} key={index}>
            <div className={styles.left}>
              <div className={styles[`image-container`]}>
                <Image
                  src={post?.node?.featuredImage?.node?.sourceUrl}
                  alt={post?.node?.title}
                  fill
                  className={styles.image}
                />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.titles}>
                <h3>{post?.node?.title}</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: post?.node?.excerpt }}
                  className={styles.desc}
                />
              </div>

              <Link href={post?.node?.slug} className={styles[`read-more`]}>
                <span>Read More</span>
                <svg
                  width="68"
                  height="12"
                  viewBox="0 0 68 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M67.0303 6.53033C67.3232 6.23744 67.3232 5.76256 67.0303 5.46967L62.2574 0.696699C61.9645 0.403806 61.4896 0.403806 61.1967 0.696699C60.9038 0.989593 60.9038 1.46447 61.1967 1.75736L65.4393 6L61.1967 10.2426C60.9038 10.5355 60.9038 11.0104 61.1967 11.3033C61.4896 11.5962 61.9645 11.5962 62.2574 11.3033L67.0303 6.53033ZM0 6.75H66.5V5.25H0V6.75Z"
                    fill="#FF991A"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FlightsSlider;
