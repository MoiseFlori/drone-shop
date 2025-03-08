import styles from "./Estetic.module.css";

const Estetic = () => {
  return (
    <section>
      <img
        src="/images/background.png"
        srcSet="/images/background.png 1x, 
                /images/background@2x.png 2x, 
                /images/background@3x.png 3x"
        alt="DJI Air 3"
        className={styles.drone}
      />
    </section>
  );
};

export default Estetic;
