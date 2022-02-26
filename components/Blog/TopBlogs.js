import styles from "../../styles/Blog.module.css";
import BlogCard from "./BlogCard";
import blogs from "../../data/blogs.json";
import Link from "next/link";

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
          <span className={`${styles.btn_blog_view_more} view_more_blog_btn`}>
            <Link href="/blogs">View More</Link>
          </span>
        </div>
      </div>
    </section>
  );
}

export default TopBlogs;
