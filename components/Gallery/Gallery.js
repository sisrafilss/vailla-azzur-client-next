import styles from "../../styles/Gallery.module.css";
import homeData from "../../data/home.json";
import GalleryGrid from "./GalleryGrid";
import { useState } from "react";

function Gallery() {
  const [galMenu, setGalMenu] = useState("all");

  return (
    <section id="gallery-section">
      <div className="container">
        <div className={`${styles.title_section} our_gallery title-section`}>
          <h1>Our Gallery</h1>
          {/* <!-- <p>Morbi in sem quis dui placerat ornare. </p> --> */}
        </div>
        <ul className={styles.filter}>
          <li>
            <span className="active" onClick={() => setGalMenu("all")}>
              All
            </span>
          </li>
          {/* <!-- <li><a href="#" data-filter=".desert">Desserts</a></li> --> */}
          <li>
            <span onClick={() => setGalMenu("restaurant")}>Restaurant</span>
          </li>
          <li>
            <span onClick={() => setGalMenu("food")}>Restaurant</span>
          </li>
        </ul>
      </div>
      <div className="iso-call row g-0">
        {galMenu === "all" && (
          <>
            {homeData.gallery[0].data.map((galData) => (
              <GalleryGrid
                key={galData.id}
                galData={galData}
                category={homeData.gallery[0].category}
              />
            ))}

            {homeData.gallery[1].data.map((galData) => (
              <GalleryGrid
                key={galData.id}
                galData={galData}
                category={homeData.gallery[1].category}
              />
            ))}
          </>
        )}

        {galMenu === "restaurant" &&
          homeData.gallery[0].data.map((galData) => (
            <GalleryGrid
              key={galData.id}
              galData={galData}
              category={homeData.gallery[0].category}
            />
          ))}

        {galMenu === "food" &&
          homeData.gallery[1].data.map((galData) => (
            <GalleryGrid
              key={galData.id}
              galData={galData}
              category={homeData.gallery[1].category}
            />
          ))}
      </div>
    </section>
  );
}

export default Gallery;
