import Image from "next/image";
import styles from "../../styles/Banner.module.css";

function SingleBanner({ banner }) {
  const { image, bannerTitle, description } = banner;
  return (
    <div id={styles.banneer_container}>
      <div>
        <Image
          className={styles.banner_img}
          src={image}
          alt={bannerTitle}
          layout="fill"
        />
      </div>

      <div className={styles.banner_text_wrapper}>
        <div className={styles.banner_text_1}>
          <span style={{ padding: "0px 10px" }}>{bannerTitle}</span>
        </div>
        <div className={styles.banner_text_2}>{description}</div>
      </div>
    </div>
  );
}

export default SingleBanner;
