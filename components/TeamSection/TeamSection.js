import Slider from "react-slick";
import styles from "../../styles/TeamSection.module.css";
import mem1 from "../../upload/mem1.jpg";
import mem2 from "../../upload/mem2.jpg";
import mem3 from "../../upload/mem3.jpg";
import mem4 from "../../upload/mem4.jpg";
import SingleMember from "./SingleMember";

const team = [
  {
    id: 1,
    name: "JAMES EVANS",
    role: "Cook",
    image: mem1,
    description: "Duis dapibus aliquam mi, eget euismod scelerisque ut.",
    socialMedia: {
      facebook: "http://facebook.com/",
      twitter: "https://twitter.com/",
      googlePlus: "http://google.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    id: 2,
    name: "Kate Howston",
    role: "Chef",
    image: mem2,
    description: "Duis dapibus aliquam mi, eget euismod scelerisque ut.",
    socialMedia: {
      facebook: "http://facebook.com/",
      twitter: "https://twitter.com/",
      googlePlus: "http://google.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    id: 3,
    name: "Albert Dupontel",
    role: "Chef",
    image: mem3,
    description: "Duis dapibus aliquam mi, eget euismod scelerisque ut.",
    socialMedia: {
      facebook: "http://facebook.com/",
      twitter: "https://twitter.com/",
      googlePlus: "http://google.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Cook",
    image: mem4,
    description: "Duis dapibus aliquam mi, eget euismod scelerisque ut.",
    socialMedia: {
      facebook: "http://facebook.com/",
      twitter: "https://twitter.com/",
      googlePlus: "http://google.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    id: 5,
    name: "James Evans",
    role: "Creative director",
    image: mem1,
    description: "Duis dapibus aliquam mi, eget euismod scelerisque ut.",
    socialMedia: {
      facebook: "http://facebook.com/",
      twitter: "https://twitter.com/",
      googlePlus: "http://google.com/",
      instagram: "https://www.instagram.com/",
    },
  },
];

function TeamSection() {
  const settings = {
    dots: true,
    infinite: false,
    accessibility: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id={styles.team_section}>
      <div className="container">
        <div className="title-section meet_our_team">
          <h1>Meet Our Team</h1>
          <p>Sed arcu. Cras consequat.</p>
        </div>

        <div className={`${styles.team_box}`}>
          <Slider {...settings}>
            {team.map((member) => (
              <SingleMember key={member.id} member={member} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
