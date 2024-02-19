"use client";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from './styles/notFound.module.scss'


const NotFound = () => {
  const [pet, setPet] = useState(false);
  return (
    <div className={styles[`not-found`]}>
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

export default NotFound;
