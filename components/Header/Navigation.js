import { faOpencart } from "@fortawesome/free-brands-svg-icons";
import {
  faLessThanEqual,
  faSearch,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Navigation.module.css";
import Cart from "./Cart";

function Navigation() {
  const [visibleSearchbox, setVisibleSearchbox] = useState(false);

  const [cartVisible, setCartVisible] = useState(true);

  const openCart = () => {
    setCartVisible(true);
  };

  return (
    <nav
      className={`${styles.navigation_container} ${styles.navbar_default} navbar navbar-expand-lg `}
    >
      <div className="container-fluid">
        <a className="navbar-brand mb-2" href="#">
          <Image
            src="/images/villa_azzur_logo.png"
            alt=""
            width={140}
            height={30}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className={`${styles.navbar_nav} navbar-nav mx-auto mb-2 mb-lg-0`}
          >
            <li className="nav-item mx-xl-3 mx-lg-2 mx-md-2">
              <a className="nav-link active" href="#home-section">
                Home
              </a>
            </li>
            <li className="nav-item mx-xl-3 mx-lg-2 mx-md-2">
              <a className="nav-link" href="#about-section">
                About
              </a>
            </li>
            <li className="nav-item mx-xl-3 mx-lg-2 mx-md-2">
              <a className="nav-link" href="#special-section">
                Todays Special
              </a>
            </li>
            <li className="nav-item mx-xl-3 mx-lg-2 mx-md-2">
              <a className="nav-link" href="#menu-section">
                Menu
              </a>
            </li>
            <li className="nav-item mx-xl-3 mx-lg-2 mx-md-2">
              <a className="nav-link" href="#reservation-section">
                Reservation
              </a>
            </li>
            <li className="nav-item mx-xl-3 mx-lg-2 mx-md-2">
              <a className="nav-link" href="#team-section">
                Team
              </a>
            </li>
            <li className="nav-item mx-xl-3 mx-lg-2 mx-md-2">
              <a className="nav-link" href="#gallery-section">
                Gallery
              </a>
            </li>
            <li className="nav-item mx-xl-3 mx-lg-2 mx-md-2">
              <a className="nav-link" href="#contact-section">
                Contact
              </a>
            </li>
            <li className="nav-item mx-xl-3 mx-lg-2 mx-md-2">
              <a className="nav-link" href="blogs.php">
                Blog
              </a>
            </li>
            <li className="nav-item" style={{ position: "relative" }}>
              <a
                className="nav-link"
                // href="#"
                onClick={() => setVisibleSearchbox(true)}
              >
                <FontAwesomeIcon icon={faSearch} />
              </a>
              <form
                className={`${styles.form_search} ${
                  visibleSearchbox && styles.active
                }`}
                onBlur={() => setVisibleSearchbox(false)}
              >
                <input type="search" placeholder="Search:" />
                <button type="submit">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className={styles.button_i}
                  />
                </button>
              </form>
              <span className={styles.header_product_count}>5</span>
            </li>
            <li className="nav-item ms-3">
              <a onClick={openCart} className="nav-link" href="#sds">
                <FontAwesomeIcon
                  style={{ fontSize: "23px" }}
                  icon={faShoppingBag}
                />
              </a>
            </li>
          </ul>
          <div
            onBlur={() => setCartVisible(false)}
            className={`${styles.cart} ${cartVisible && styles.cart_block}`}
          >
            <Cart />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
