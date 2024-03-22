import { Link } from "react-router-dom";
import AuthorDate from "./authorDate";
import Button from "./button";
import { heroSectionData } from "./data";
import Excerpt from "./exerpt";

export default function HomeBlog({ blogs }) {
  const buttonstyle = { backgroundColor: "rgba(255, 208, 80, 1)" };
  const authorNameStyle = { color: "#592EA9" };
  const authorGenStyle = { color: "#4C4C4C" };
  // console.log(blogs[0]);
  const featId = blogs[0]?.id;
  const id = blogs?.id;
  return (
    <section className="homeblog-section">
      <div className="home-feat-post-container">
        <h2 className="home-blog-title">Featured Post</h2>
        <div className="home-feat-post">
          <div className="home-feat-post-thmb-cont">
            <img
              src={`${blogs[0]?.imgUrl}`}
              alt="home-feat-post-thmb"
              className="home-feat-post-thmb"
            />
          </div>
          <AuthorDate
            data={blogs[0]}
            authorNameStyle={authorNameStyle}
            authorGenStyle={authorGenStyle}
            fontSize={{ fontSize: "14px" }}
          />
          <h2 className="feat-post-title">
            {<Excerpt str={blogs[0]?.title} count={70} />}
          </h2>
          <p className="feat-post-sub">
            {" "}
            {<Excerpt str={blogs[0]?.description} count={120} />}
          </p>

          <Link to={`/blog-page/blog-post/${featId}`}>
            <Button style={buttonstyle}>Read More &gt;</Button>
          </Link>
        </div>
      </div>
      <div className="home-all-post-container">
        <h2 className="home-blog-title">All Posts</h2>
        <div className="home-blog-cont">
          {blogs?.slice(0, 5).map((data, index) => (
            <div key={index} className="home-blog">
              <AuthorDate
                data={data}
                authorNameStyle={authorNameStyle}
                authorGenStyle={authorGenStyle}
                fontSize={{ fontSize: "14px" }}
              />
              <Link to={`/blog-page/blog-post/${data.id}`}>
                <h3 className="home-blog-title">
                  {<Excerpt str={data?.title} count={70} />}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
