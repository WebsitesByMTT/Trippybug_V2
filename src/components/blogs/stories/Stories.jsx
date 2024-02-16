import React from "react";
import Image from "next/image";
import styles from "./stories.module.scss";
import CardStory from "./cardStory/CardStory";

const data = [
  {
    id: 1,
    imageSrc: "/topDestination/1.png",
    name: "Airlines",
  },
  {
    id: 1,
    imageSrc: "/topDestination/1.png",
    name: "Airlines",
  },
  {
    id: 1,
    imageSrc: "/topDestination/1.png",
    name: "Cars",
  },
  {
    id: 1,
    imageSrc: "/topDestination/1.png",
    name: "Explore",
  },
  {
    id: 1,
    imageSrc: "/topDestination/1.png",
    name: "All",
  },
  {
    id: 1,
    imageSrc: "/topDestination/1.png",
    name: "All",
  },
  {
    id: 1,
    imageSrc: "/topDestination/1.png",
    name: "All",
  },
  {
    id: 1,
    imageSrc: "/topDestination/1.png",
    name: "All",
  },
  {
    id: 1,
    imageSrc: "/topDestination/1.png",
    name: "Airlines",
  },
  {
    id: 1,
    imageSrc: "/topDestination/1.png",
    name: "Airlines",
  },
  {
    id: 1,
    imageSrc: "/topDestination/1.png",
    name: "Cars",
  },
  {
    id: 1,
    imageSrc: "/topDestination/1.png",
    name: "Explore",
  },
  {
    id: 1,
    imageSrc: "/topDestination/1.png",
    name: "All",
  },
  {
    id: 1,
    imageSrc: "/topDestination/1.png",
    name: "All",
  },
  {
    id: 1,
    imageSrc: "/topDestination/1.png",
    name: "All",
  },
  {
    id: 1,
    imageSrc: "/topDestination/1.png",
    name: "All",
  },
];

const Stories = () => {
  console.log(data);
  return (
    <div className={styles.stories}>
      <div className={styles.content}>
        {data.map((e) => {
          return (
            <div className={styles.stories} key={e.id}>
              <div className={styles[`image-container`]}>
                <CardStory data={data} />
                <Image
                  src={e.imageSrc}
                  alt="image"
                  fill
                  className={styles.image}
                />
              </div>

              <h3>{e.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stories;
