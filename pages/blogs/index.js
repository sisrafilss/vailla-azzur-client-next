import BlogCard from "../../components/Blog/BlogCard";
import styles from "../../styles/Blog.module.css";
import blogs from "../../data/blogs.json";
import Navigation from "../../components/Header/Navigation";

function Blogs() {
  return (
    <>
      <Navigation />
      <section style={{ marginBottom: "28px" }}>
        <div className="title-section our_blogs" style={{ marginTop: "30px" }}>
          <h1>Blogs</h1>
        </div>
        <div id="blog_card_section" className="our_blogs_cards mt-0">
          <div id="blog_card_section_inside" className={styles.blog_wrapper}>
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
