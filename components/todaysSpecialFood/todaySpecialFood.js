import styles from "../../styles/TodaySpecialFood.module.css";
import steck1 from "../../upload/steak1.jpg";
import steck2 from "../../upload/steak2.jpg";
import steck3 from "../../upload/steak3.jpg";
import steck4 from "../../upload/steak4.jpg";
import FoodPost from "./foodPost";
import FoodPost2 from "./foodPost2";

// Fake Data for Food
const specialFood = [
  {
    id: 1,
    name: "TOMAHOK",
    description: "Mah potato with sauteed vegetable",
    price: 2095,
    category: "Steak",
    image: steck4,
  },
  {
    id: 2,
    name: "RIB-EYE STEAK",
    description: "French fry with sauteed vegetable",
    price: 1295,
    category: "Steak",
    image: steck3,
  },
  {
    id: 3,
    name: "T-BONE STEAK",
    description: "Jacket potato with sauteed vegetable",
    price: 1595,
    category: "Steak",
    image: steck1,
  },
  {
    id: 4,
    name: "MIXED GRILLED PLATTER",
    description: "Rice with vegetable",
    price: 2295,
    category: "Platter",
    image: steck2,
  },
];

function SpecialSection() {
  return (
    <section id={styles.special_section}>
      <div className="container">
        <div className="title-section white todays_special">
          <h1>Todays Special</h1>
          {/* <!-- <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada <br> erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p> --> */}
        </div>
      </div>
      <div className="container">
        <div className={`${styles.today_special_box}`}>
          <div className={`${styles.food_line}`}>
            {specialFood.slice(0, 2).map((post) => (
              <FoodPost key={post.id} post={post} />
            ))}
          </div>

          <div className={`${styles.food_line}`}>
            {specialFood.slice(2, 4).map((post) => (
              <FoodPost2 key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialSection;
