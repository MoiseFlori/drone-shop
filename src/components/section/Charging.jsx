import styles from "./Section.module.css";

const Charging = () => {
  return (

    <section className={styles.section}>
      <div>
        <video
          src="/images/charging.mp4"
          className={styles.image}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Battery Charging Hub with Power Accumulation
        </h2>
        <p className={styles.description}>
          The Battery Charging Hub supports PD fast charging and a power
          accumulation function, which allows you to transfer the remaining
          power of multiple low-power batteries into the battery with the
          highest remaining power.
        </p>
      </div>
    </section>
  );
};

export default Charging;
