import styles from "../../styles/Cart.module.css";

function Cart() {
  return (
    <>
      <div className="blur_bg_main" onClick="closeCart()"></div>

      {/* <h1 className="text-light">This is Cart!</h1> */}

      <div className={styles.cart_sidebar_div}>
        <div className={styles.cart_header_div}>
          <p className={styles.cart_header_text}>Your Order</p>

          <i
            className={`${styles.cart_header_cross} fa fa-times `}
            onClick="closeCart()"
          ></i>
        </div>
        <div className={styles.cart_content_middle_div}>
          <div className={styles.cart_content_row}>
            <div className={styles.cart_inc_dec}>
              <i className="cart_arrow_up fa fa-sort-up"></i>
              <p className={styles.cart_number}>2</p>

              <i className="cart_arrow_down fa fa-sort-down"></i>
            </div>
            <div className={styles.cart_pic_div}>
              <img
                className={styles.cart_pic}
                src="images/fried_rice.jpg"
                alt="food"
              />
            </div>
            <div className={styles.cart_food_name_div}>
              <p className={styles.cart_food_name}>Fried Rice</p>
              <p className={styles.cart_food_price}>TK 445</p>
            </div>

            <i className="fa fa-times cart_cross"></i>
          </div>

          <div className={styles.cart_horizontal_divider}></div>

          <div className={styles.cart_content_row}>
            <div className={styles.cart_inc_dec}>
              <i className={`${styles.cart_arrow_up} fa fa-sort-up`}></i>
              <p className={styles.cart_number}>2</p>

              <i className={`${styles.cart_arrow_down} fa fa-sort-down`}></i>
            </div>
            <div className={styles.cart_pic_div}>
              <img
                className={styles.cart_pic}
                src="images/grilled_prawn.jpg"
                alt="food"
              />
            </div>
            <div className={styles.cart_food_name_div}>
              <p className={styles.cart_food_name}>Grilled Prawn</p>
              <p className={styles.cart_food_price}>TK 645</p>
            </div>

            <i className="fa fa-times cart_cross"></i>
          </div>

          <div className={styles.cart_horizontal_divider}></div>

          <div className={styles.cart_content_row}>
            <div className={styles.cart_inc_dec}>
              <i className="cart_arrow_up fa fa-sort-up"></i>
              <p className={styles.cart_number}>1</p>

              <i className="cart_arrow_down fa fa-sort-down"></i>
            </div>
            <div className={styles.cart_pic_div}>
              <img className={styles.cart_pic} src="images/steak1.jpg" alt="food" />
            </div>
            <div className={styles.cart_food_name_div}>
              <p className={styles.cart_food_name}>T-Bone Steak</p>
              <p className={styles.cart_food_price}>TK 1595</p>
            </div>

            <i className="fa fa-times cart_cross"></i>
          </div>
        </div>

        <div className={styles.cart_total_div}>
          <p className={styles.cart_total_price_text}>Total Price:</p>
          <p className={styles.cart_total_price}>TK 3775</p>
        </div>

        <a
          href="checkout.php"
          className={styles.cart_checkout_btn}
          style={{ textDecoration: "none" }}
        >
          Checkout
        </a>
      </div>
    </>
  );
}

export default Cart;
