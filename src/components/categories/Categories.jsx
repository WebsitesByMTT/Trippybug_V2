"use client";
import Image from "next/image";
import styles from "./categories.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import Link from "next/link";

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
      <Link href={`/blogs?category=all`} className={styles.link}>
        <div className={styles[`image-container`]}>
          <Image src={"/all.png"} fill alt={"all"} className={styles.image} />
        </div>
        <h6>All</h6>
      </Link>
      {data.map(
        (item, index) =>
          item?.node?.name != "Gallery" && (
            <Link
              href={`/blogs?category=${item.node?.name}`}
              className={styles.link}
              key={item.node?.id}
            >
              <div className={styles[`image-container`]}>
                <Image
                  src={
                    item.node?.posts?.edges[0]?.node?.featuredImage?.node
                      ?.sourceUrl
                  }
                  fill
                  alt={item.node?.name}
                  className={styles.image}
                />
              </div>
              <h6>{item.node?.name}</h6>
            </Link>
          )
      )}
    </Slider>
  );
};

export default Categories;
