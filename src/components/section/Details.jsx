
import {
  FaWeight,
  FaClock,
  FaCamera,
  FaTachometerAlt,
  FaBroadcastTower,
} from "react-icons/fa";
import styles from "./Details.module.css";


const Details = () => {
  return (


   
      <div className={styles.features}>
        <div className={styles.feature}>
          <FaCamera className={styles.icon} /> Wide-Angle & 3x Medium Tele
        </div>
        <div className={styles.feature}>
          <FaClock className={styles.icon} /> 46-Min Max Flight Time
        </div>
        <div className={styles.feature}>
          <FaWeight className={styles.icon} /> Weight 720g
        </div>
        <div className={styles.feature}>
          <FaTachometerAlt className={styles.icon} /> 21m/s Max Speed
        </div>
        <div className={styles.feature}>
          <FaBroadcastTower className={styles.icon} /> 20km HD Video
          Transmission
        </div>
      </div>
  
  );
};

export default Details;
