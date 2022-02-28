import Image from "next/image";
import styles from "../../styles/TodaySpecialFood.module.css";

function FoodPost({ post }) {
  const { id, name, description, price, category, image } = post;
  return (
    <>
      <div className={`${styles.food_post} todays_special_food1`}>
        <div className={`${styles.inner_food_post}`}>
          {/* <div
                  className="food-gal"
                  data-toggle="modal"
                  data-target="#todays_special_food1"
                  style={{ cursor: "pointer" }}
                >
                  
                </div> */}

          <div className={`${styles.food_gal}`}>
            <Image
              className={styles.food_gal_img}
              src={image}
              alt=""
              data-bs-toggle="modal"
              data-bs-target={`#food${id}`}
              type="button"
            />
          </div>

          <div className={styles.food_content}>
            <div className={styles.food_content_box}>
              <h2 className={styles.food_content_box_h2}>
                <a
                  className={styles.food_content_box_h2_a}
                  href="http://localhost:3000"
                >
                  {name}
                </a>
              </h2>
              <p className={styles.food_content_box_p}>{description}</p>
              <span className={styles.price}>TK {price}</span>
              <span className={styles.category}>{category}</span>
              <span className={styles.special_food_btn}>Add to Cart</span>
            </div>
          </div>

          
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade "
        id={`food${id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className={"modal-content border-0 " + styles.modal_container}>
            <div>
              <button
                type="button"
                className="close btn_modal_close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <Image src={image} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodPost;
