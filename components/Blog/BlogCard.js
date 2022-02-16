import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "../../styles/Blog.module.css";

function BlogCard({ blog }) {
  const { id, title, description, image, tag, category, timeElasped, date } =
    blog;

  return (
    <a href="http://localhost:3000" className="text-decoration-none">
      <div
        id="blogs_card_main_div"
        className="our_blogs_card "
        style={{ padding: "20px 15px" }}
      >
        <div
          id="blogs_card"
          className={`${styles.single_blog_card} villa-card blogs_card`}
        >
          <Image
            className={`${styles.blog_thumbnail_img} card-img-top`}
            src={image}
            alt=""
          />

          <div id="blogs_date_div" className={styles.blog_date}>
            <span className="text-light">{date}</span>
          </div>

          <div id="blog_tag_div" className={styles.blog_tag}>
            <span id="blog_tag_text" className="text-light">
              {tag}
            </span>
          </div>

          {/* <!-- <div id="blog_tag_div" style="position: absolute;z-index: 99;background-color: #2eaba0;padding:2px 15px;border-radius: 8px;top: 358px;left: calc(100% - 760px);width: 140px;text-align: center;display: flex;justify-content: center;flex-direction: row;margin-right: 30px;flex-wrap: wrap;float:left"> */}

          <div className={`${styles.blog_card_body} card-body`}>
            <h5 className={`${styles.blog_card_title} card-title`}>{title}</h5>

            <p className={`${styles.blog_card_text} card-text`}>
              {description}
            </p>

            <div className={styles.blog_category}>
              <p>{category}</p>

              <span className={styles.blog_posted_time}>
                <i className="far fa-clock"></i>
                <FontAwesomeIcon icon={faClock} />
                <span style={{ marginLeft: "3px" }}>{timeElasped}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default BlogCard;
