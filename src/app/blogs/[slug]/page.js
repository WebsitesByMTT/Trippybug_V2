import Navbar from "@/components/navbar/Navbar";
import React from "react";
import styles from "./singleBlog.module.scss";

const SingleBlog = () => {
  return (
    <>
      <Navbar />
      <section className={styles[`single-blog`]}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <header>
                <div className={styles.title}>
                  <h1>Figma ipsum component variant main layer. Bullet.</h1>
                </div>
                <div className={styles.desc}>

                </div>
              </header>
            </div>
            <div className={styles.bottom}></div>
          </div>
          <aside className={styles.sidebar}></aside>
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
