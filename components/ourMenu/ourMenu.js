import { useState } from "react";
import styles from "../../styles/OurMenu.module.css";
import beefChill from "../../upload/beef_chili.jpg";
import chickenStrognoff from "../../upload/chicken_strogonoff.jpg";
import chillLime from "../../upload/chili_lime.jpg";
import cofee1 from "../../upload/coffee1.jpg";
import frape1 from "../../upload/frappe1.jpg";
import friedRice from "../../upload/fried_rice.jpg";
import grillFish from "../../upload/grilled_fish.jpg";
import grildPrown from "../../upload/grilled_prawn.jpg";
import mocktail1 from "../../upload/mocktail1.jpg";
import mocktail2 from "../../upload/mocktail2.jpg";
import specialRice from "../../upload/special_rice.jpg";
import steck1 from "../../upload/steak1.jpg";
import steck2 from "../../upload/steak2.jpg";
import steck3 from "../../upload/steak3.jpg";
import steck4 from "../../upload/steak4.jpg";
import stuffedChicken from "../../upload/stuffed_chicken.jpg";
import surfTruf from "../../upload/surf_and_turf.jpg";
import whitePasta from "../../upload/white_pasta.jpg";
import MenuDetail from "./MenuDetail";

const mainMenu = [
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

const starterMenu = [
  {
    id: 1,
    name: "Surf & Turf",
    description: "Prawn starter",
    price: 425,
    currency: "TK",
    image: surfTruf,
  },
  {
    id: 2,
    name: "Szechuan Beef Chili",
    description: "Beef Chili",
    price: 495,
    currency: "TK",
    image: beefChill,
  },
  {
    id: 3,
    name: "Chili Lime Baked Shrimp Cups",
    description: "Shrimp Cup",
    price: 245,
    currency: "TK",
    image: chillLime,
  },
  {
    id: 4,
    name: "Grilled Fish",
    description: "Grilled fish.",
    price: 445,
    currency: "TK",
    image: grillFish,
  },
  {
    id: 5,
    name: "Stuffed Chicken",
    description: "Stuffed Chicken",
    price: 595,
    currency: "TK",
    image: stuffedChicken,
  },
  {
    id: 6,
    name: "Chicken Stogonoff",
    description: "With sautted pasta",
    price: 495,
    currency: "TK",
    image: chickenStrognoff,
  },
];

const drinks = [
  {
    id: 1,
    name: "Pomegranate Mojito",
    description: "Mocktail",
    price: 225,
    currency: "TK",
    image: mocktail1,
  },
  {
    id: 2,
    name: "Americano",
    description: "Coffee",
    price: 180,
    currency: "TK",
    image: cofee1,
  },
  {
    id: 3,
    name: "Fruit Punch",
    description: "Mocktail",
    price: 245,
    currency: "TK",
    image: mocktail2,
  },
  {
    id: 4,
    name: "Caramel Frappe",
    description: "Frappe",
    price: 279,
    currency: "TK",
    image: frape1,
  },
  {
    id: 5,
    name: "Espresso",
    description: "Coffee",
    price: 155,
    currency: "TK",
    image: cofee1,
  },
  {
    id: 6,
    name: "Blueberry Mojito",
    description: "Mojito",
    price: 225,
    currency: "TK",
    image: mocktail1,
  },
];

function OurMenu() {
  const [menuName, setMenuName] = useState("Main");

  const handleMenu = (menuName) => {
    setMenuName(menuName);
  };

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
            <li
              role="presentation"
              className={menuName === "Main" && styles.active}
            >
              <button onClick={() => handleMenu("Main")}>Main</button>
            </li>
            {/* <!-- <li role="presentation"><a href="#dinner" aria-controls="dinner" role="tab" data-toggle="tab">Dinner</a></li> --> */}
            <li
              role="presentation"
              className={menuName === "Starter" && styles.active}
            >
              <button onClick={() => handleMenu("Starter")}>Starter</button>
            </li>
            <li
              role="presentation"
              className={menuName === "Drinks" && styles.active}
            >
              <button onClick={() => handleMenu("Drinks")}>Drinks</button>
            </li>
          </ul>

          {/* Main Menu */}
          {menuName === "Main" && <MenuDetail menuList={mainMenu} />}

          {/* Starter Menu */}
          {menuName === "Starter" && <MenuDetail menuList={starterMenu} />}

          {/* Drinks Menu */}
          {menuName === "Drinks" && <MenuDetail menuList={drinks} />}
        </div>
      </div>
    </section>
  );
}

export default OurMenu;
