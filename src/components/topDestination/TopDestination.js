import React from "react";
import styles from "./topDestination.module.scss";
import Image from "next/image";
import Arrow from "../SVG/Arrow";
import Favourite from "../SVG/Favourite";
import Titles from "../titles/Titles";

const cards = [
  {
    id: 1,
    imageSrc: "/topDestination/1.png",
    name: "Paris",
    reviews: 245,
  },
  {
    id: 2,
    imageSrc: "/topDestination/2.png",
    name: "Mount fuji",
    reviews: 320,
  },
  { id: 3, imageSrc: "/topDestination/3.png", name: "Bali", reviews: 180 },
  {
    id: 4,
    imageSrc: "/topDestination/4.png",
    name: "Switzerland",
    reviews: 180,
  },
  { id: 5, imageSrc: "/topDestination/5.png", name: "Tokyo", reviews: 180 },
  { id: 6, imageSrc: "/topDestination/6.png", name: "Berlin", reviews: 180 },
];

const TopDestination = () => {
  return (
    <div className={styles.topDestination}>
      <div className={styles.container}>
       
        <Titles
          title="Top Destination"
          subtitle="Not Sure Where To Start ?"
          desc="See where others are travelling and follow their trails"
        />

        <div className={styles.content}>
          <div className={styles.cards}>
            {cards.map((e) => {
              return (
                <div className={styles.card} key={e.id}>
                  <div className={styles[`image-container`]}>
                    <Image
                      src={e.imageSrc}
                      alt="image"
                      fill
                      className={styles.image}
                    />
                  </div>

                  <div className={styles.detail}>
                    <div className={styles.fav}>
                      <Favourite />
                    </div>

                    <div className={styles[`detail-titles`]}>
                      <h6>{e.name}</h6>
                      <p>{e.reviews}reviews</p>
                    </div>
                    <div className={styles.btn}>
                      <button>
                        Explore
                        <Arrow />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDestination;
