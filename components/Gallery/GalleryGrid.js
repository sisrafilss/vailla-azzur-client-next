import Image from "next/image";
import styles from "../../styles/Gallery.module.css";

function GalleryGrid({ galData, category }) {
  const { id, image, description } = galData;
  return (
    <div
      style={{ maxHeight: "225px", maxWidth: "375px" }}
      className={`${styles.gal_project} gallery_pic col-sm-12`}
    >
      <Image src={image} width={375} height={225} alt="" />
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
