import Image from "next/image";
import sign from "../images/sign.png";
import about1 from "../upload/about1.jpg";
import about2 from "../upload/about2.jpg";
import about3 from "../upload/about3.jpg";
import about4 from "../upload/about4.jpg";

function About() {
  return (
    <section id="about-section">
      <div className="container">
        <div className="title-section discover_our_story" data-aos="zoom-in">
          <h1>Discover Our Story</h1>
          <p>
            VILLA AZZUR EXUDES AN ATMOSPHERE REMINISCENT OF SOUTH OF FRANCE
            MEETS PARISIAN GLAMOUR LOCATED AT BANANI.
            <br />{" "}
          </p>
        </div>
        <div className="about-box">
          <div className="row">
            <div className="col-md-6">
              <div className="image-holder our_history_images">
                <div className="img1">
                  <Image src={about1} alt="" />
                </div>
                <div className="img2">
                  <Image className="snd-img" src={about2} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="rest-about-box our_history">
                <h1>Our History</h1>
                <p>
                  VILLA AZZUR EXUDES AN ATMOSPHERE REMINISCENT OF SOUTH OF
                  FRANCE MEETS PARISIAN GLAMOUR LOCATED AT BANANI. PERFECT FOR
                  ANY SPECIAL OCCASION, PRIVATE AND GROUP DINING, OR ROMANTIC
                  DINNER, VILLA AZUR IS A TOUCH OF CLASS INFUSED WITH DECADENCE{" "}
                </p>
                <Image src={sign} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="about-box left-content">
          <div className="row">
            <div className="col-md-6">
              <div className="rest-about-box our_restaurant">
                <h1>Our Restaurant</h1>
                <p>
                  PERFECT FOR ANY SPECIAL OCCASION, PRIVATE AND GROUP DINING, OR
                  ROMANTIC DINNER, VILLA AZUR IS A TOUCH OF CLASS INFUSED WITH
                  DECADENCE
                </p>
                <p>
                  <span>
                    If you have any questions, we are here to support you 24/7.
                    We do our best to make your life happier and easier! See you
                    soon!
                  </span>
                </p>
                <div className="about-time">
                  <div className="row">
                    <div className="col-md-5 col-sm-6">
                      <p>Monday — Sunday</p>
                      <span>12 pm — 11 pm</span>
                    </div>
                    {/*  <div className="col-md-5 col-sm-6">
											<p>Friday — Sunday</p>
											<span>11 am — 11 pm</span>
										</div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image-holder our_restaurant_images">
                <div className="img1">
                  <Image src={about4} alt="" />
                </div>
                <div className="img2">
                  <Image className="snd-img" src={about3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
