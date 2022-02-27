import styles from "../../styles/Banner.module.css";
import Slider from "react-slick";
import homeData from "../../data/home.json";
import SingleBanner from "./SingleBanner";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ marginTop: "-80px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <section id="home-section" className="slider1">
      <div className="tp-banner-container">
        <div className="tp-banner">
          <Slider {...settings}>
            {homeData.banners.map((banner) => (
              <SingleBanner key={banner.id} banner={banner} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Banner;
