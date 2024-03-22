import { Link } from "react-router-dom";
import AuthorDate from "./authorDate";
import Button from "./button";
import Excerpt from "./exerpt";

export default function Hero({ data, style, children }) {
  // console.log(data.imgUrl);
  const buttonstyle = {
    backgroundColor: "rgba(255, 208, 80, 1)",
    display: "flex",
    alignItem: "center",
  };

  const description = data.description;
  const id = data.id;
  // console.log(description);

  return (
    <section className="hero-section">
      <div className="hero" style={{ background: `url(${data.imgUrl})` }}>
        <div className="gradient-overlay"></div>
        <div className="hero-conetnt">
          <p className="category-p">
            Posted on <span className="category">{data.category}</span>
          </p>
          <h1 className="title">{<Excerpt str={data.title} count={70} />}</h1>
          <div className="hero-snippet-cont">
            <AuthorDate data={data} />
            <p className="hero-desc">
              {<Excerpt str={description} count={120} />}
            </p>

            <Link to={`/blog-page/blog-post/${id}`}>
              <Button buttonstyle={buttonstyle}>Read More &gt;</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
