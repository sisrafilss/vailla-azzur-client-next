import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import About from "../components/about";
import MakeReservation from "../components/makeReservation";
import OurMenu from "../components/ourMenu/ourMenu";
import SpecialSection from "../components/todaysSpecialFood/todaySpecialFood";

function Home() {
  return (
    <>
      <About />
      <SpecialSection />
      <OurMenu />
      <MakeReservation />
      <Script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      />
    </>
  );
}

export default Home;
