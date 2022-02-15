import Image from "next/image";
import styles from "../../styles/OurMenu.module.css";

function SingleMenu({ menu }) {
  const { name, description, price, currency, image } = menu;

  return (
    <li>
      <div
        className={`${styles.list_image} cursor-pointer`}
        data-toggle="modal"
        data-target="#fried_rice"
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
  );
}

export default SingleMenu;
