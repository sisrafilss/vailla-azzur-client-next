import { useForm } from "react-hook-form";
import styles from "../styles/MakeReservation.module.css";

function MakeReservation() {
  // React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section id="reservation-section">
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
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.reservation_form}
              >
                <label>Guest Name:</label>
                <input
                  type="text"
                  name="name-guest"
                  id="name-guest"
                  placeholder="Name"
                  {...register("guestName")}
                />
                <label>Date:</label>
                <input
                  type="date"
                  name="date-guest"
                  id="date-guest"
                  placeholder="dd/mm/yyyy"
                  {...register("date")}
                />
                <div className="row">
                  <div className="col-md-6">
                    <label>Time:</label>
                    <input
                      type="text"
                      name="time-guest"
                      id="time-guest"
                      placeholder="7:00 pm"
                      {...register("time")}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Pers:</label>
                    <input
                      type="number"
                      name="pers-guest"
                      id="pers-guest"
                      placeholder="2 people"
                      {...register("pers")}
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
