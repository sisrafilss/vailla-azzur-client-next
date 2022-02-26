import {
  faDribbble,
  faFacebook,
  faGooglePlus,
  faLinkedin,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/ContactSection.module.css";

function ContactSection() {
  return (
    <section id={styles.contact_section}>
      <div className={styles.upper_part}>
        <div className="container">
          <div className="title-section white get_in_touch">
            <h1>Get in Touch</h1>
            <p>Contact us for any queries.</p>
          </div>

          <div className={styles.widget_area}>
            <div className="row">
              <div className={`${styles.contact_info} col-md-4`}>
                <div className={styles.info_widget}>
                  <h1 className="text-light">Contact Info</h1>
                  <p>
                    House- 61, Road- 15, Block- D, Banani 1213 Dhaka, Dhaka
                    Division, Bangladesh.{" "}
                  </p>
                  <p>
                    <span>01798-777766</span>
                    {/* <!-- <span>+ 123 9876-54-43</span> --> */}
                  </p>
                  <p>villaazur@gmail.com</p>
                  <ul className={styles.social_icons}>
                    <li>
                      <a
                        className="facebook"
                        target="__blank"
                        href="https://www.facebook.com/VillaAzzur/"
                      >
                        {/* <i className="fa fa-facebook"></i> */}
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="#">
                        {/* <i className="fa fa-twitter"></i> */}
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a className="dribble" href="#">
                        {/* <i className="fa fa-dribbble"></i> */}
                        <FontAwesomeIcon icon={faDribbble} />
                      </a>
                    </li>
                    <li>
                      <a className="google" href="#">
                        {/* <i className="fa fa-google-plus"></i> */}
                        <FontAwesomeIcon icon={faGooglePlus} />
                      </a>
                    </li>
                    <li>
                      <a className="linkedin" href="#">
                        {/* <i className="fa fa-linkedin"></i> */}
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                    <li>
                      <a className="pinterest" href="#">
                        {/* <i className="fa fa-pinterest"></i> */}
                        <FontAwesomeIcon icon={faPinterest} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 open_hours">
                <div className={styles.info_widget}>
                  <h1 className="text-light">Open Hours</h1>
                  <p>
                    <span>Monday — Sunday</span>
                    <span className="time">12 pm — 11 pm</span>
                  </p>
                  {/* <!-- <p>
										<span>Friday — Sunday</span>
										<span className="time">11 am — 11 pm</span>
									</p> --> */}
                  <p>Note: Restaurant is opened on holidays as well.</p>
                </div>
              </div>

              <div className="col-md-4 say_hello">
                <div className={styles.info_widget}>
                  <h1 className="text-light">Say Hello!</h1>
                  <form id={styles.contact_form}>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Name*"
                    />
                    <input
                      name="mail"
                      id="mail"
                      type="text"
                      placeholder="Email*"
                    />
                    <textarea
                      name="comment"
                      id="comment"
                      placeholder="*Message*"
                    ></textarea>
                    <div className={styles.submit_area}>
                      <input
                        type="submit"
                        id="submit_contact"
                        value="Send Message"
                      />
                      <div id="msg" className="message"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.map} style={{ display: "none" }}></div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7773169485877!2d90.40354601481607!3d23.790942784569406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c725315bc5b1%3A0xf1938712f2822884!2sVilla%20Azzur!5e0!3m2!1sen!2sbd!4v1639459115472!5m2!1sen!2sbd"
        width="100%"
        height="300"
        allowFullScreen=""
        loading="lazy"
        style={{ width: "100vw", border: "0" }}
      ></iframe>
    </section>
  );
}

export default ContactSection;
