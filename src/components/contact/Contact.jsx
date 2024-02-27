"use client";
import ReactDOM from "react-dom";
import Image from "next/image";
import styles from "./contact.module.scss";
import useMounted from "../useMounted";
import { useState } from "react";
import ThankYou from "../thankYou/ThankYou";

const Contact = ({ showContactHanlder, submiteHandler }) => {
  const [submitted, setSubmitted] = useState(true);
  const mounted = useMounted();
  if (!mounted) return;

  return ReactDOM.createPortal(
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles[`image-container`]}>
            <Image src={"/contact.png"} fill className={styles.image} />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles[`image-container`]}>
              <Image
                src={"/logo.png"}
                alt="logo"
                fill
                className={styles.image}
              />
            </div>

            <div
              className={styles.close}
              onClick={() => showContactHanlder(false)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3L21 21"
                  stroke="#0F5A83"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M3 21L21 3"
                  stroke="#0F5A83"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.titles}>
              <h2>Get In Touch</h2>
              <p>
                Figma ipsum component variant main layer. Pen rotate content
                editor create variant. Project rotate rotate.
              </p>
            </div>

            <form className={styles.form}>
              <div className={styles.item}>
                <div className={styles.input}>
                  <input type="text" placeholder="First Name" />
                </div>
                <div className={styles.input}>
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.input}>
                  <input type="email" placeholder="Email" />
                </div>

                <div className={styles.input}>
                  <input type="text" placeholder="Phone" />
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.input}>
                  <textarea
                    name="message"
                    id=""
                    rows="1"
                    placeholder="message"
                  ></textarea>
                </div>
              </div>

              <div className={styles.button}>
                <button className={() => submiteHandler(true)}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Contact;
