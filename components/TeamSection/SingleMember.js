import {
    faFacebook,
    faGooglePlus,
    faInstagram,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "../../styles/TeamSection.module.css";

function SingleMember({ member }) {
  const { id, name, role, image, description, socialMedia } = member;

  return (
    <div className={`item ${styles.team_post}`}>
      <div className={styles.inner_team_post}>
        <div className={styles.team_gal}>
          <Image src={image} alt="" />
        </div>
        <h2>{name}</h2>
        <span className={styles.role}>{role}</span>
        <p>{description}</p>
        <ul className={styles.social_icons}>
          <li>
            <a
              className="facebook"
              target="_blank"
              rel="noreferrer"
              href={socialMedia.facebook}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a
              className="twitter"
              target="_blank"
              rel="noreferrer"
              href={socialMedia.twitter}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a
              className="google"
              target="_blank"
              rel="noreferrer"
              href={socialMedia.googlePlus}
            >
              <FontAwesomeIcon icon={faGooglePlus} />
            </a>
          </li>
          <li>
            <a
              className="instagram"
              target="_blank"
              rel="noreferrer"
              href={socialMedia.instagram}
            >
              <FontAwesomeIcon className="" icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SingleMember;
