import Image from "next/image";
import styles from "../styles/SpecialSection.module.css";
import steck4 from "../upload/steak4.jpg";

function SpecialSection() {
  return (
    <section id="special-section">
      <div className="container">
        <div className="title-section white todays_special">
          <h1>Todays Special</h1>
          {/* <!-- <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada <br> erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p> --> */}
        </div>
      </div>
      <div className="container">
        <div className="today-special-box">
          <div className="food-line">
            <div className="food-post todays_special_food1">
              <div className="inner-food-post">
                {/* <div
                  className="food-gal"
                  data-toggle="modal"
                  data-target="#todays_special_food1"
                  style={{ cursor: "pointer" }}
                >
                  
                </div> */}

                <div className="food-gal">
                  <Image
                    src={steck4}
                    alt=""
                    data-bs-toggle="modal"
                    data-bs-target="#food1"
                    type="button"
                  />
                </div>

                <div className="food-content">
                  <div className="food-content-box">
                    <h2>
                      <a href="javascript:void(0)">Tomahok</a>
                    </h2>
                    <p>Mah potato with sauteed vegetable </p>
                    <span className="price">TK 2095</span>
                    <span className="category">Steak</span>
                    <span
                      className="special_food_btn"
                      style={{
                        backgroundColor: "#f4b350",
                        padding: "6px 1px",
                        marginTop: "10px",
                        color: "white",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                    >
                      Add to Cart
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="food1"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div
                  className={"modal-content border-0 " + styles.modal_container}
                >
                  <div>
                    <button
                      type="button"
                      className={"btn-close " + styles.close_button}
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <Image src={steck4} alt="" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialSection;
