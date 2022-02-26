import { useRouter } from "next/router";

import styles from "../../styles/BlogDetail.module.css";
import blogs from "../../data/blogs.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

function BlogDetail() {
  const router = useRouter();
  const { blogId } = router.query;

  const blog = blogs.find((blog) => blog.id === parseInt(blogId));

  console.log(blog);

  let prevBlog, nextBlog;
  if (parseInt(blogId) > 1) {
    prevBlog = blogs[parseInt(blogId) - 2];
  } else {
    prevBlog = { title: "There is no Blog!" };
  }

  if (parseInt(blogId) >= blogs.length) {
    nextBlog = { title: "There is no Blog" };
  } else {
    nextBlog = blogs[parseInt(blogId)];
  }

  return (
    <>
      <div id={styles.purple_bg}></div>

      <section className="data_table_area" id={styles.blogs_section}>
        <div>
          <div className="container">
            <div
              className={`${styles.main_title} text-center title-section`}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <h1 id={styles.our_blogs_text} className="blog_title text-light">
                {blog?.title}
              </h1>
            </div>
          </div>

          <div id={styles.blog_detail_section}>
            <div id={styles.blog_detail_div} className="container">
              <img
                id={styles.blog_detail_image1}
                className="blog_detail_image1"
                src={blog?.image}
                alt=""
                data-aos="zoom-in"
                data-aos-duration="1000"
              />

              <div
                id={styles.blogs_time_div}
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <FontAwesomeIcon icon={faClock} />
                <span style={{ marginLeft: "6px" }}>{blog?.timeToRead}</span>
              </div>

              <div
                id={styles.blog_detail_first_paragraph}
                className="blog_detail_first_paragraph"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <p className={`${styles.blog_detail_para}`}>
                  {blog?.description}
                </p>
              </div>

              <div id={styles.blog_detail_images}>
                <div
                  id="blog_detail_image2_div"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <img
                    id={styles.blog_detail_image2}
                    className="blog_detail_image2"
                    src={blog?.image}
                    alt=""
                  />
                </div>
              </div>

              <div
                id={styles.blog_detail_second_paragraph}
                className="blog_detail_second_paragraph"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <p className={styles.blog_detail_para}>{blog?.description}</p>
              </div>

              <img
                id={styles.blog_detail_image3_mbl}
                className="blog_detail_image3_mbl"
                src={blog?.image}
                alt=""
                data-aos="fade-left"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </div>

        <div className="container" id={styles.prev_next_div}>
          <div id={styles.prev_next_div_prev}>
            <span>
              <button
                className="btn"
                name="blogs_prev"
                id={styles.blogs_prev}
                data-aos="fade-right"
                data-aos-duration="1000"
                type="button"
              >
                <span>
                  <i
                    className="fas fa-long-arrow-alt-left"
                    id={styles.prev_arrow}
                  ></i>
                </span>
                <span id={styles.prev_text}>Previous</span>
                <span>
                  <i
                    className="fas fa-long-arrow-alt-left"
                    id={styles.prev_arrow1}
                  ></i>
                </span>
              </button>
            </span>

            <img
              className={styles.next_prev_image}
              src={prevBlog?.image}
              data-aos="fade-right"
              data-aos-duration="1000"
              alt={prevBlog?.title}
            />

            <p
              id={styles.prev_blogs_title}
              data-aos="fade-right"
              data-aos-duration="1000"
              className="text-dark"
            >
              {prevBlog?.title}
            </p>
          </div>

          <div id={styles.prev_next_div_next}>
            <span>
              <button
                className="btn float-end"
                name="blogs_next"
                id={styles.blogs_next}
                data-aos="fade-left"
                data-aos-duration="1000"
                type="button"
              >
                <span>
                  <i
                    className="fas fa-long-arrow-alt-right"
                    id={styles.next_arrow1}
                  ></i>
                </span>
                <span id={styles.next_text}>Next</span>
                <span>
                  <i
                    className="fas fa-long-arrow-alt-right"
                    id="next_arrow"
                  ></i>
                </span>
              </button>
            </span>

            <img
              className={styles.next_prev_image}
              src={nextBlog?.image}
              data-aos="fade-left"
              data-aos-duration="1000"
              alt={nextBlog?.title}
            />

            <p
              id={styles.next_blogs_title}
              data-aos="fade-left"
              data-aos-duration="1000"
              className="text-dark"
            >
              {nextBlog?.title}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetail;
