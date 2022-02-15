import Image from "next/image";
import styles from "../../styles/OurMenu.module.css";

function SingleMenu({ menu }) {
  const { id, name, description, price, currency, image } = menu;

  return (
    <>
      <li>
        <div
          className={`${styles.list_image} cursor-pointer`}
          data-bs-toggle="modal"
          data-bs-target={`#menu${id}`}
          type="button"
        >
          <Image src={image} alt="" className={styles.menu_item_img} />
          {/* <!-- <span>new</span> --> */}
        </div>
        <div className={styles.list_content}>
          <h2>
            {name}{" "}
            <span>
              {currency} {price}
            </span>{" "}
            <br />
            <span className={styles.btn_add_to_cart}>Add To Cart</span>
          </h2>
          <p>{description}</p>
        </div>
      </li>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id={`menu${id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content border-0">
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

export default SingleMenu;
