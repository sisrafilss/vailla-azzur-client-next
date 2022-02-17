import styles from "../../styles/Blog.module.css";
import food1 from "../../upload/food1.jpg";
import food2 from "../../upload/food2.jpg";
import food3 from "../../upload/food3.jpg";
import food4 from "../../upload/food4.jpg";
import food5 from "../../upload/food5.jpg";
import BlogCard from "./BlogCard";

const blogs = [
  {
    id: 1,
    title: "Food Recipe",
    description: "This is Description",
    image: food1,
    tag: "My Food",
    category: "Food",
    timeElasped: "2 minutes",
    date: "12 Jun",
  },
  {
    id: 2,
    title: "Food Recipe",
    description: "This is Description",
    image: food2,
    tag: "My Food",
    category: "Food",
    timeElasped: "2 minutes",
    date: "12 Jun",
  },
  {
    id: 3,
    title: "Food Recipe",
    description: "This is Description",
    image: food3,
    tag: "My Food",
    category: "Food",
    timeElasped: "2 minutes",
    date: "12 Jun",
  },
  {
    id: 4,
    title: "Food Recipe",
    description: "This is Description",
    image: food4,
    tag: "My Food",
    category: "Food",
    timeElasped: "2 minutes",
    date: "12 Jun",
  },
  {
    id: 5,
    title: "Food Recipe",
    description: "This is Description",
    image: food5,
    tag: "My Food",
    category: "Food",
    timeElasped: "2 minutes",
    date: "12 Jun",
  },
  {
    id: 6,
    title: "Food Recipe",
    description: "This is Description",
    image: food2,
    tag: "My Food",
    category: "Food",
    timeElasped: "2 minutes",
    date: "12 Jun",
  },
];

function TopBlogs() {
  return (
    <section style={{ marginBottom: "20px" }}>
      <div className="title-section our_blogs" style={{ marginTop: "100px" }}>
        <h1>Blogs</h1>
      </div>

      <div id="blog_card_section" className="our_blogs_cards mt-0">
        <div id="blog_card_section_inside" className={styles.blog_wrapper}>
          {blogs.slice(0, 4).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        <div
          className={`${styles.btn_blog_view_more_wrapper} blog_view_more_div`}
        >
          <a
            href="/blogs"
            className={`${styles.btn_blog_view_more} view_more_blog_btn`}
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}

export default TopBlogs;