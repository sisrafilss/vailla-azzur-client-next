/* eslint-disable @next/next/no-html-link-for-pages */

import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../styles/Navigation.module.css";

let timeout;
let scroll = 0;

function Navigation() {
  const [visibleSearchbox, setVisibleSearchbox] = useState(false);

  const [cartVisible, setCartVisible] = useState(true);

  const openCart = () => {
    setCartVisible(true);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        if (
          (scroll >= window.scrollY && window.scrollY > 600) ||
          scroll > 600
        ) {
          document.getElementById("header").classList.add("sticky");
        } else {
          document.getElementById("header").classList.remove("sticky");
        }

        scroll = window.scrollY;
      }, 10);
    };
  }, []);
 
  return (
    <header id="header">
      <div className={styles.navbar}>
        <nav
          className={`${styles.navigation_container} ${styles.navbar_default} navbar navbar-expand-md `}
        >
          <div className="container">
            <a className={`${styles.navbar_brand} `} href="#">
              <Image
                src="/images/villa_azzur_logo.png"
                alt=""
                width={140}
                height={30}
              />
            </a>
            <button
              className={`${styles.navbar_toggler} navbar-toggler`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <span className="navbar-toggler-icon"></span> */}
              <FontAwesomeIcon icon={faBars} className={styles.toggler_icon} />
            </button>

            <div
              className={`${styles.navbar_collapse} collapse navbar-collapse`}
              id="navbarSupportedContent"
            >
              <ul
                className={`${styles.navbar_nav} ${styles.navbar_nav} navbar-nav ms-auto mb-2 mb-lg-0`}
              >
                <li className="nav-item  mx-md-2">
                  <a
                    className={`${styles.active} nav-link`}
                    href="#home-section"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item  mx-md-2">
                  <a className="nav-link" href="#about-section">
                    About
                  </a>
                </li>
                <li className="nav-item  mx-md-2">
                  <a className="nav-link" href="#special-section">
                    Todays Special
                  </a>
                </li>
                <li className="nav-item  mx-md-2">
                  <a className="nav-link" href="#menu-section">
                    Menu
                  </a>
                </li>
                <li className="nav-item  mx-md-2">
                  <a className="nav-link" href="#reservation-section">
                    Reservation
                  </a>
                </li>
                <li className="nav-item  mx-md-2">
                  <a className="nav-link" href="#team-section">
                    Team
                  </a>
                </li>
                <li className="nav-item  mx-md-2">
                  <a className="nav-link" href="#gallery-section">
                    Gallery
                  </a>
                </li>
                <li className="nav-item  mx-md-2">
                  <a className="nav-link" href="#contact-section">
                    Contact
                  </a>
                </li>
                <li className="nav-item  mx-md-2">
                  <a className="nav-link" href="/blogs">
                    Blog
                  </a>
                </li>
                <li
                  className={`${styles.search_form} nav-item`}
                  style={{ position: "relative", cursor: "pointer" }}
                >
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
                  {/* <span className={styles.header_product_count}>5</span> */}
                </li>
                {/* <li className="nav-item ms-3">
                  <a onClick={openCart} className="nav-link" href="#sds">
                    <FontAwesomeIcon
                      style={{ fontSize: "23px" }}
                      icon={faShoppingBag}
                    />
                  </a>
                </li> */}
              </ul>
              {/* <div
                onBlur={() => setCartVisible(false)}
                className={`${styles.cart} ${cartVisible && styles.cart_block}`}
              >
                <Cart />
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
