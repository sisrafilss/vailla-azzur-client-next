import styles from "../styles/MakeReservation.module.css";

function MakeReservation() {
  return (
    <section id={styles.reservation_section}>
      <div className="container">
        <div className={styles.reservation_box}>
          <div className="row">
            <div className="col-md-6 make_reservation">
              <div className={`${styles.title_section}`}>
                <h1 className="text-light">Make Reservation</h1>
                <p>
                  Booking a table has never been so easy with free online <br />{" "}
                  restaurant reservations, booking now!!
                </p>
              </div>

              {/* Reservation Form */}
              <form className={styles.reservation_form}>
                <label>Guest Name:</label>
                <input
                  type="text"
                  name="name-guest"
                  id="name-guest"
                  placeholder="Name"
                />
                <label>Date:</label>
                <input
                  type="text"
                  name="date-guest"
                  id="date-guest"
                  placeholder="mm/dd/yyyy"
                />
                <div className="row">
                  <div className="col-md-6">
                    <label>Time:</label>
                    <input
                      type="text"
                      name="time-guest"
                      id="time-guest"
                      placeholder="7:00 pm"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Pers:</label>
                    <input
                      type="text"
                      name="pers-guest"
                      id="pers-guest"
                      placeholder="2 people"
                    />
                  </div>
                </div>
                <input
                  type="submit"
                  name="submit-reservation"
                  id="submit-reservation"
                  value="Find a Table"
                />
                <div id="msg-rsv"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MakeReservation;
