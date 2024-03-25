import { useEffect, useState } from "react";
import AuthorDate from "../components/authorDate";
import BlogPostThmb from "../components/blogPostThmb";
import Button from "../components/button";
import CategorySection from "../components/categorySectionComponent";
import Excerpt from "../components/exerpt";
import { isEmpty, orderBy } from "lodash";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
export default function Blog({ blogs, user, handleDelete, tags, getBlogs }) {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      setSelectedCategory(category); // Set selected category from URL params
      filterBlogsByCategory(category);
    }
  }, [category]);

  function filterBlogsByCategory(category) {
    // Filter the blogs based on the selected category
    const filteredResults = blogs.filter((blog) => blog.category === category);
    setFilteredBlogs(filteredResults);
  }

  function handleTagClick(tag) {
    setSelectedTag(tag);
    // Filter the blogs based on the selected tag
    const filteredResults = blogs.filter((blog) => blog.tags.includes(tag));

    setFilteredBlogs(filteredResults);
  }
  // console.log("category:", category);

  function handleChange(e) {
    const { value } = e.target;
    setSearch(value);

    if (isEmpty(value)) {
      setFilteredBlogs([]);
    } else {
      // Filter the blogs based on the search input
      const filteredResults = blogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(value.toLowerCase()) ||
          blog.description.toLowerCase().includes(value.toLowerCase()) ||
          (Array.isArray(blog.tag) &&
            blog.tags.some((tag) =>
              tag.toLowerCase().includes(value.toLowerCase())
            )) ||
          blog.category.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredBlogs(filteredResults);
    }
  }
  const displayedBlogs =
    filteredBlogs.length > 0
      ? orderBy(filteredBlogs, ["timeStamp"], ["desc"])
      : orderBy(blogs, ["timeStamp"], ["desc"]);

  return (
    <>
      <section className="featured-banner-cont"></section>

      <section className="blog-post-section">
        <h1 className="blog-post-head">{category ? category : "All Post"}</h1>
        <hr className="hr" />
        <div className="tag-category-section">
          <div className="tags-cont">
            <h4 className="filter-h4">Filter</h4>
            <div className="tags-list">
              {tags.map((tag, i) => (
                <span
                  className={`tag ${tag === selectedTag ? "selectedTag" : ""}`}
                  key={i}
                  onClick={() => {
                    // console.log(tag);
                    handleTagClick(tag);
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <input
          type="search"
          placeholder="search"
          className="search-input"
          value={search}
          onChange={handleChange}
        />
        <div className="blog-post-cont">
          {displayedBlogs?.slice(0, 10).map((data, i) => (
            <BlogPostThmb
              title={<Excerpt str={data.title} count={70} />}
              imgSrc={data.imgUrl}
              description={<Excerpt str={data.description} count={120} />}
              category={data.category}
              id={data?.id}
              key={i}
              user={user}
              handleDelete={handleDelete}
            />
          ))}
        </div>
        <div className="btn-container">
          <span className="prev-btn">&lt;Prev </span>
          <span className="next-btn">Next &gt;</span>
        </div>
      </section>
      <CategorySection titleText={"All Category"} />
    </>
  );
}
