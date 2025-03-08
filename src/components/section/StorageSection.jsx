import React from "react";
import styles from "./Section.module.css";

const StorageSection = () => {
  return (
    <section className={styles.section}>
      <div>
        <img
          src="/images/storage.png"
          alt="Storage"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Always Ready: 42GB of Built-in Storage</h2>
        <p className={styles.description}>
          DJI Air 3S comes standard with 42GB of built-in storage. This allows
          you to start recording right away and avoid having to deal with
          microSD cards.
        </p>
      </div>
    </section>
  );
};
export default StorageSection;
