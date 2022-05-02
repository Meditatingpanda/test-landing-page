import React from "react";

import assets from "../assets";
import styles from "../styles/Global";

const FeatureCard = ({ iconUrl, iconText }) => (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
);

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Instant Apps
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            Instant apps are the small interactive cards which you get for your
            search queries. We can build instant apps for all kinds of use cases
            like dictionary, checking football scores, stock prices or notes
            from your notion or even search history from company slack or
            anything!
          </p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.react} iconText="React Native" />
          <FeatureCard iconUrl={assets.javascript} iconText="JavaScript" />
        </div>
      </div>
    </div>
  );
};

export default Features;
