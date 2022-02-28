/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "../../styles/Gallery.module.css";

function GalleryGrid({ galData, category }) {
  const { id, image, description } = galData;
  return (
    <div className={`${styles.gal_project} gallery_pic`}>
      <img className={styles.gal_project_img} src={image} alt="" />
      <div className={styles.hover_gal}>
        <div className={styles.inner_gal}>
          <h2>{description}</h2>
          <span>{category}</span>
        </div>
      </div>
    </div>
  );
}

export default GalleryGrid;
