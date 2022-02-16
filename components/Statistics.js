import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import styles from "../styles/Statistics.module.css";

function Statistics() {
  return (
    <section className={styles.statistic_section}>
      <div className="container">
        <div className={styles.statistic_box}>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className={styles.statistic_post}>
                <p>
                  <span className={styles.timer} data-from="0" data-to="23">
                    <VisibilitySensor
                      partialVisibility
                      offset={{ bottom: 200 }}
                    >
                      {({ isVisible }) => (
                        <span>{isVisible ? <CountUp end={23} /> : "0"}</span>
                      )}
                    </VisibilitySensor>
                  </span>
                </p>
                <h2>Years Experience</h2>
                {/* <!-- <p>Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p> --> */}
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className={styles.statistic_post}>
                <p>
                  <span className={styles.timer}>
                    <VisibilitySensor
                      partialVisibility
                      offset={{ bottom: 200 }}
                    >
                      {({ isVisible }) => (
                        <span>{isVisible ? <CountUp end={3200} /> : "0"}</span>
                      )}
                    </VisibilitySensor>
                  </span>
                </p>
                <h2>Hours of Cooking</h2>
                {/* <!-- <p>Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p> --> */}
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className={styles.statistic_post}>
                <p>
                  <span className={styles.timer}>
                    <VisibilitySensor
                      partialVisibility
                      offset={{ bottom: 200 }}
                    >
                      {({ isVisible }) => (
                        <span>{isVisible ? <CountUp end={5000} /> : "0"}</span>
                      )}
                    </VisibilitySensor>
                  </span>
                </p>
                <h2>Happy Clients</h2>
                {/* <!-- <p>Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p> --> */}
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className={styles.statistic_post}>
                <p>
                  <span className={styles.timer}>
                    <VisibilitySensor
                      partialVisibility
                      offset={{ bottom: 200 }}
                    >
                      {({ isVisible }) => (
                        <span>{isVisible ? <CountUp end={12} /> : "0"}</span>
                      )}
                    </VisibilitySensor>
                  </span>
                </p>
                <h2>Skilled Chefs</h2>
                {/* <!-- <p>Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p> --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
