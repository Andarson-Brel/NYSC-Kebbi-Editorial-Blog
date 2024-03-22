import { useParams } from "react-router-dom";
import AuthorDate from "../components/authorDate";
import { heroSectionData } from "../components/data";
import SuggestionCard from "../components/suggestionCard";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function BlogPage({ setActive, blogs }) {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  // console.log(id);
  useEffect(() => {
    id && getBlog();
  }, [id]);
  async function getBlog() {
    const docRef = doc(db, "blogpost", id);
    const blogDetail = await getDoc(docRef);
    setBlog(blogDetail?.data());
    setActive(null);
  }
  const body = blog?.description;
  return (
    <div className="blog-page-cont">
      <h1 className="blog-post-title">{blog?.title}</h1>
      <span className="author-category">
        <AuthorDate
          data={blog}
          fontSize={{ fontSize: "16px", fontWeight: "700", lineHeight: "40px" }}
        />{" "}
        <span className="category"> {blog?.category}</span>
      </span>
      <div className="blog-thmb-cont">
        <img src={blog?.imgUrl} alt={blog?.title} />
      </div>
      <article className="post-article">
        {/* <div dangerouslySetInnerHTML={{ __html: body }} /> */}
        <p className="post">{blog?.description}</p>
      </article>

      <section className="suggestion-section">
        <h2>You May Also Like</h2>
        <div className="suggestion-container">
          {blogs?.slice(0, 3).map((data, i) => (
            <SuggestionCard key={i} data={data} />
          ))}
        </div>
      </section>
    </div>
  );
}
