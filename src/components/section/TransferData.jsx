import styles from "./Section.module.css";


const TransferData = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>Off-State QuickTransfer</h2>
        <p className={styles.description}>
          You can now send files from your Air 3S to a smartphone even when the
          drone is powered off.Transfers to a computer can also be done with the
          drone powered off—simply connect Air 3S via a compatible USB cable.
        </p>
      </div>
      <div>
        <img
          src="/images/transfer.png"
          alt="Storage"
          className={styles.image}
        />
      </div>
    </section>
  );
};
export default TransferData;
