import styles from "../../styles/OurMenu.module.css";
import friedRice from "../../upload/fried_rice.jpg";
import grildPrown from "../../upload/grilled_prawn.jpg";
import specialRice from "../../upload/special_rice.jpg";
import steck1 from "../../upload/steak1.jpg";
import steck2 from "../../upload/steak2.jpg";
import steck3 from "../../upload/steak3.jpg";
import steck4 from "../../upload/steak4.jpg";
import whitePasta from "../../upload/white_pasta.jpg";
import SingleMenu from "./singleMenu";

const menuList = [
  {
    id: 1,
    name: "Fried Rice",
    description: "Fried Rice",
    price: 445,
    currency: "TK",
    image: friedRice,
  },
  {
    id: 2,
    name: "Grilled Prawn",
    description: "With mushroom sauce.",
    price: 643,
    currency: "TK",
    image: grildPrown,
  },
  {
    id: 3,
    name: "Creamy White Pasta",
    description: "White sauce pasta",
    price: 445,
    currency: "TK",
    image: whitePasta,
  },
  {
    id: 4,
    name: "Villaazur Special Rice",
    description: "Villazur Special Rice",
    price: 445,
    currency: "TK",
    image: specialRice,
  },
  {
    id: 5,
    name: "Tomahok",
    description: "Mah potato with sauteed vegetable",
    price: 2095,
    currency: "TK",
    image: steck4,
  },
  {
    id: 6,
    name: "Rib-Eye Steak",
    description: "French fry with sauteed",
    price: 1295,
    currency: "TK",
    image: steck3,
  },
  {
    id: 7,
    name: "T-Bone Steak",
    description: "Jacket potato with sauteed",
    price: 1595,
    currency: "TK",
    image: steck1,
  },
  {
    id: 8,
    name: "MIXED GRILLED PLATTER",
    description: "Rice with vegetable",
    price: 2295,
    currency: "TK",
    image: steck2,
  },
];

function OurMenu() {
  return (
    <section id={styles.menu_section}>
      <div className="container">
        <div className="title-section our_menu">
          <h1>Our Menu</h1>
          {/* <!-- <p>Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna <br> nibh, viverra non, semper suscipit, posuere a, pede.</p> --> */}
        </div>

        <div className={`${styles.menu_box} menu_box`}>
          {/* <!-- Nav tabs --> */}
          <ul className={`${styles.nav} ${styles.nav_tabs}`} role="tablist">
            <li role="presentation" className={styles.active}>
              <a
                href="#lunch"
                aria-controls="lunch"
                role="tab"
                data-toggle="tab"
              >
                Main
              </a>
            </li>
            {/* <!-- <li role="presentation"><a href="#dinner" aria-controls="dinner" role="tab" data-toggle="tab">Dinner</a></li> --> */}
            <li role="presentation">
              <a
                href="#desserts"
                aria-controls="desserts"
                role="tab"
                data-toggle="tab"
              >
                Starter
              </a>
            </li>
            <li role="presentation">
              <a
                href="#drinks"
                aria-controls="drinks"
                role="tab"
                data-toggle="tab"
              >
                Drinks
              </a>
            </li>
          </ul>

          <div className={styles.tab_content}>
            <div role="tabpanel" className="tab-pane active" id="lunch">
              <div className="row">
                <div className="col-md-6">
                  <ul className={styles.menu_list_items}>
                    {menuList
                      .slice(0, Math.floor(menuList.length / 2))
                      .map((menu) => (
                        <SingleMenu key={menu.id} menu={menu} />
                      ))}
                  </ul>
                </div>

                <div className="col-md-6">
                  <ul className={styles.menu_list_items}>
                    {menuList
                      .slice(Math.floor(menuList.length / 2), menuList.length)
                      .map((menu) => (
                        <SingleMenu key={menu.id} menu={menu} />
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMenu;
