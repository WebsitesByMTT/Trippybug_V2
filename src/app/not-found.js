"use client";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles/notFound.module.scss";
import Footer from "@/components/footer/Footer";

const NotFound = () => {
  const [pet, setPet] = useState(false);
  return (
    <>
      <div className={styles[`not-found`]}>
        <Navbar />
        <div className={styles.container}>
          <div className={styles[`inner-container`]}>
            <div className={styles.left}>
              <h1>404 !</h1>
              <p>This page was not found, but you can stay and pet the dog</p>
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
                    fill
                    className={styles.image}
                  />
                </div>
              ) : (
                <div className={styles.pet}>
                  <Image
                    src={`/notFound/dog.png`}
                    alt="not-found"
                    fill
                    className={styles.image}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer color="#fff9ea" />
    </>
  );
};

export default NotFound;
