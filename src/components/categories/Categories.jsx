"use client";
import Image from "next/image";
import styles from "./categories.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const Categories = ({ data }) => {
  const sliderRef = useRef(null);

  const carouselSettings = {
    slidesToShow: 8,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000,
    dots: false,
    arrows: false,
    centermode: true,
    infinite: false,
    lazyLoad: "ondemand",
    touchThreshold: 100,
    swipeToSlide: true,
    focusOnSelect: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
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
    <Slider {...carouselSettings} ref={sliderRef} className={styles.list}>
      {data.map((item, index) => (
        <li key={index}>
          <div className={styles[`image-container`]}>
            <Image
              src={item.img}
              fill
              alt="category"
              className={styles.image}
            />
          </div>
          <h6>{item.title}</h6>
        </li>
      ))}
    </Slider>
  );
};

export default Categories;
