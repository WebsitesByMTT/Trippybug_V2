"use client";
import Image from "next/image";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isOnSmallerDevices, setIsOnSmallerDevices] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsOnSmallerDevices(window.innerWidth <= 480);
    };

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShow(true);
        console.log("SCROLL Y : ", scrollY);
        console.log("INNER HEIGHT : ", innerHeight);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`${styles.navbar}`}>
      <div className={styles.container}>
        <Link href={"/"} className={styles.logo}>
          <Image className={styles.image} src={"/logo.png"} fill alt="logo" />
        </Link>
        <ul
          className={`${styles.links} ${
            isOnSmallerDevices ? (show ? styles.notOnHero : "") : ""
          }`}
        >
          <li>
            <Link href={"/flights "}>Flights</Link>
          </li>
          <li>
            <Link href={"/hotels "}>Hotels</Link>
          </li>
          <li>
            <Link href={"/cars "}>Cars</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
