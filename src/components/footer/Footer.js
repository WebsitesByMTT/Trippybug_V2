"use client";
import Link from "next/link";
import styles from "./footer.module.scss";
import Image from "next/image";
import Contact from "../contact/Contact";
import { useState } from "react";
import ThankYou from "../thankYou/ThankYou";

const Footer = ({ color }) => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const showContactHanlder = (value) => {
    setOpen(value);
  };

  const submiteHandler = (value) => {
    setSubmitted(value);
  };

  return (
    <>
      {open && (
        <Contact
          showContactHanlder={showContactHanlder}
          submiteHandler={submiteHandler}
        />
      )}
      {submitted && <ThankYou />}
      <div className={styles.footer}>
        <div
          className={styles.border}
          style={{ background: color ? color : "#fff" }}
        ></div>
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.left}>
              <Link href={"/"} className={styles[`image-container`]}>
                <Image
                  src="/Logo.svg"
                  alt="logo"
                  fill
                  className={styles.image}
                />
              </Link>

              <p>
                Figma ipsum component variant main layer. Connection ipsum
                italic rectangle background frame team effect. Subtract.
              </p>
            </div>

            <div className={styles.right}>
              <ul>
                <li> Product</li>
                <li>
                  <Link href={"/flights"}>Flight</Link>
                </li>
                <li>
                  <Link href={"/hotels"}>Hotels</Link>
                </li>
                <li>
                  <Link href={"cars"}>Cars</Link>
                </li>
              </ul>
              <ul>
                <li>Navigation</li>

                <li>About</li>
                <li>
                  <Link href={"/#explore-now"}>Explore</Link>
                </li>
                <li>
                  {" "}
                  <Link href={"/#trending-now"}>Trending</Link>
                </li>
                <li>
                  <Link href={"/blogs"}>Blogs</Link>
                </li>
                <li onClick={() => showContactHanlder(true)}>Contact</li>
              </ul>
              <ul>
                <li>Legal</li>

                <li>Privacy Policy</li>
                <li>Terms Of Service</li>
                <li>Cooking Policy</li>
                <li>
                  <Link href={"/sitemap"}>Sitemap</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.bottom}>
            <ul>
              <li>
                <a href="/">
                  <Image src="/facebook.svg" alt="fb" width={20} height={20} />{" "}
                </a>
              </li>
              <li>
                <a href="/">
                  <Image src="/insta.png" alt="insta" width={20} height={20} />
                </a>
              </li>
              <li>
                <a href="/">
                  <Image
                    src="/Twitter.png"
                    alt="twitter"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <Image src="/Youtube.png" alt="yt" width={20} height={20} />
                </a>
              </li>
              <li>
                <a href="/">
                  <Image src="/Linkdin.png" alt="link" width={20} height={20} />
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.last}>
            <ul>
              <li>Copyright © 2024 Trippybug. All rights Reserved.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
