"use client";
import Image from "next/image";
import Navbar from "../navbar/Navbar";
import styles from "./fourZeroFour.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";

const FourZeroFour = () => {
  const [pet, setPet] = useState(false);

  useEffect(() => {
    console.log("Pet the dog", pet);
  }, [pet]);

  return (
    <div className={styles.fourZeroFour}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>404</h1>
          <h2>This page was not found, but you can stay and pet the dog</h2>
          <Link href={"/"}>
            <button>Go Back</button>
          </Link>
        </div>
        <div className={styles.right}>
          {pet ? (
            <Link href={"/"} className={styles.button}>
              <span>Go Home</span>
            </Link>
          ) : (
            <button className={styles.button} onClick={() => setPet(true)}>
              <div className={styles[`button-container`]}>
                <span>Pet him</span>
              </div>
            </button>
          )}

          {pet ? (
            <div className={styles.pet}>
              <Image
                src={`/notFound/smiling-dog.png`}
                alt="not-found"
                width={622}
                height={775}
                className={styles.image}
              />
            </div>
          ) : (
            <Image
              src={`/notFound/dog.png`}
              alt="not-found"
              width={622}
              height={775}
              className={styles.image}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FourZeroFour;
